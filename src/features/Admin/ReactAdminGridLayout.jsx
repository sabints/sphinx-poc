import GridLayout from "react-grid-layout";
import './styles.scss'
import { useEffect, useState } from "react";
import { v4 as guid } from 'uuid'
import ProfileCard from "../../components/widgets/prodile-card/ProfileCard";
import ChartCard from "../../components/widgets/chart-card/Chartcard";
import MediaCard from "../../components/widgets/media-card/MediaCard";
import { db } from '../../firebase';
import { collection, getDocs, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';


function ReactAdminGridLayout() {
    const [pageLayout, setPageLayout] = useState([])
    const [widgets, setWidgets] = useState([])
    const [templateList, setTemplateList] = useState([])
    const [selectedTemplateName, setTemplatename] = useState('');
    const [selectedWidget, setSelectedWidget] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        const fetchWidgets = async () => {
            const widgetCollection = await getDocs(collection(db, "WidgetList"));
            const widgetsData = widgetCollection.docs.map((doc) => ({
                i: doc.data().i,
                x: Number(doc.data().x || 0),   // Default value if not provided
                y: Number(doc.data().y || 0),
                w: Number(doc.data().w || 2),
                h: Number(doc.data().h || 2),
                minW: Number(doc.data().minW || 2),
                maxW: Number(doc.data().maxW),
                minH: Number(doc.data().minH || 2),
                maxH: Number(doc.data().maxH),
                isBounded: true,
                isDraggable: true,
                isResizable: true,
                resizeHandles: true,
                properties: doc.data().properties
            }));
            setWidgets(widgetsData);
        }
        fetchWidgets();

        const fetchTemplates = async () => {
            const querySnapshot = await getDocs(collection(db, 'Client - Barclays'));
            const templatesdata = querySnapshot.docs.map((doc) => ({
                templateName: doc.id,
                data: doc.data().pageLayout
            }))
            setTemplateList(templatesdata);
        }
        fetchTemplates();
    }, [])
    // Define the list of available widgets on the left panel
    // const [widgets] = useState();

    // Track the layout for the grid (starts empty)
    const [layout, setLayout] = useState([]);


    // Handle layout change when a widget is dropped
    const onLayoutChange = (newLayout) => {
        setLayout(newLayout);
        if (selectedWidget) {
            const updatedWidget = newLayout.find((item) => item.i === selectedWidget.i);
            if (updatedWidget) {
                setSelectedWidget(updatedWidget); // Sync selected widget with its new values
            }
        }
        formatPageLayout(newLayout);
    };

    const formatPageLayout = (newlayout) => {
        //Format The Page Layout
        const templateName = selectedTemplateName == '' ? `Workspace-Templatev0${templateList.length}` : selectedTemplateName;
        const layoutWidgets = newlayout.map((layoutItem) => {
            const wdata = widgets.find(w => w.i == layoutItem.i.split('-')[0]);
            if (wdata) {
                return {
                    templateName: templateName,
                    layoutConfig: { ...layoutItem, isBounded: true, isDraggable: true, isResizable: true, resizeHandles: true },
                    properties: wdata.properties
                }

            }
        })
        if (layoutWidgets) {
            setPageLayout(layoutWidgets);
        }
    }

    // Handle the drag start event
    const onDragStart = (e, widget) => {
        e.dataTransfer.setData('widgetId', widget.i); // Store widget id in dataTransfer
    };
    // Handle the drop event when a widget is dragged into the grid
    const onDrop = (e) => {
        e.preventDefault(); // Prevent the default behavior (important for drop to work)
        const widgetId = e.dataTransfer.getData('widgetId'); // Get widget id from dataTransfer
        const widget = widgets.find(w => w.i === widgetId);

        // Get the position of the drop on the page
        const dropX = e.clientX; // The x-coordinate on the page
        const dropY = e.clientY; // The y-coordinate on the page

        // You may want to adjust the drop coordinates to map them into grid cells
        const gridContainer = e.target.getBoundingClientRect();
        const gridX = Math.floor((dropX - gridContainer.left) / 100); // Convert to grid's x position
        const gridY = Math.floor((dropY - gridContainer.top) / 100);  // Convert to grid's y position

        const newWidgetLayout = {
            i: widget.i + `-Item{${layout.length}}`,
            x: gridX,
            y: gridY,
            w: widget.w,
            h: widget.h,
            minW: widget.minW,
            minH: widget.minH,
            maxW: widget.maxW,
            maxH: widget.maxH,
            isBounded: true,
            isDraggable: true,
            isResizable: true,
        };

        // Adjust positions of widgets on drop to avoid overlap
        const updatedLayout = [...layout, newWidgetLayout];

        // Sort the layout based on the y-coordinate to avoid overlap (top to bottom)
        updatedLayout.sort((a, b) => a.y - b.y);

        // Ensure widgets are spaced appropriately by checking their positions
        const adjustedLayout = updatedLayout.map((item, index) => {
            // If the widget overlaps, adjust it to the next available position
            let overlap = false;
            for (let i = 0; i < index; i++) {
                if (
                    item.x < updatedLayout[i].x + updatedLayout[i].w &&
                    item.x + item.w > updatedLayout[i].x &&
                    item.y < updatedLayout[i].y + updatedLayout[i].h &&
                    item.y + item.h > updatedLayout[i].y
                ) {
                    overlap = true;
                    break;
                }
            }

            // If there's overlap, adjust the y position of the widget
            if (overlap) {
                item.y = updatedLayout[index - 1].y + updatedLayout[index - 1].h + 1;
            }

            return item;
        });

        // Update the layout state
        setLayout(adjustedLayout);
    };

    function renderWidget(widgetData) {
        let wname = widgetData.i.split('-')[0]
        const widget = widgets.find(w => w.i === wname);
        switch (wname) {
            case 'ProfileWidget':
                return <ProfileCard {...widget} />
            case 'ChartWidget':
                return <ChartCard />
            case 'MediaWidget':
                return <MediaCard />
            default:
                return <div>unknown widget</div>;
        }
    }

    async function saveTemplateData() {
        setIsLoading(true);
        try {
            if (pageLayout) {
                const docRef = doc(db, 'Client - Barclays', pageLayout[0].templateName)
                // Save the templateData as a field within the Sample Template document
                const dataToSave = {
                    pageLayout: pageLayout,
                    Timestamp: new Date()
                };
                // Check if the 'template' document exists
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    await updateDoc(docRef, dataToSave);
                } else {

                    // Write to Firestore
                    await setDoc(docRef, dataToSave);
                }
                alert(`Saved ${selectedTemplateName}`)
            }

        } catch (error) {
            console.error("Error saving template:", error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);  // Stop loading after 5 seconds delay
            }, 5000);// Stop loading
        }
    }
    const ontemplateSelect = (template) => {
        setIsLoading(true);  // Start loading
        try {
            const widgetsData = template.data.map((doc) => ({
                i: doc.layoutConfig.i,
                x: Number(doc.layoutConfig.x || 0),   // Default value if not provided
                y: Number(doc.layoutConfig.y || 0),
                w: Number(doc.layoutConfig.w || 2),
                h: Number(doc.layoutConfig.h || 2),
                minW: Number(doc.layoutConfig.minW || 2),
                maxW: Number(doc.layoutConfig.maxW),
                minH: Number(doc.layoutConfig.minH || 2),
                maxH: Number(doc.layoutConfig.maxH),
                isBounded: true,
                isDraggable: true,
                isResizable: true,
            }));
            setLayout(widgetsData);
            setTemplatename(template.templateName);
        } catch (error) {
            console.error("Error selecting template:", error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);  // Stop loading after 5 seconds delay
            }, 5000);  // Stop loading
        }
    };
    const resetLayout = () => {
        setLayout([]);
        setTemplatename('');
    }
    const onGridItemSelect = (widget) => {
        setSelectedWidget(widget);
    }
    const handleRemoveWidget = (widget, e) => {
        const confirm = window.confirm('Removet Widget?')
        if (confirm) {
            const updatedLayout = layout.filter((item) => item.i !== widget);
            setLayout(updatedLayout); // Update the state with the new layout
            formatPageLayout(updatedLayout);
        }
    }
    const updateSelectedWidget = (property, value) => {
        const updatedWidget = { ...selectedWidget, [property]: value };
        setSelectedWidget(updatedWidget);

        // Update layout with the modified widget
        const updatedLayout = layout.map((item) =>
            item.i === updatedWidget.i ? updatedWidget : item
        );
        setLayout(updatedLayout);
        formatPageLayout(updatedLayout);
    };
    return (
        <div>
            <header data-bs-theme="light">
                <div className="navbar shadow-sm">
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex">
                            <img src="/src/assets/images/barclays-logo.png" alt="" height="25px" width="auto" />
                        </a>
                        <div className="search-container">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder="Query your data" />
                            <i className="bi bi-mic"></i>
                        </div>
                        <a href="#" className="navbar-brand d-flex">
                            <img src="/src/assets/images/kpmg-logo.png" alt="" height="25px" width="auto" />
                        </a>
                    </div>
                </div>
            </header>

            <section className='admin-section'>
                {isLoading && (
                    <div className="loading-indicator">
                        <div className="spinner"></div>
                    </div>
                )}
                <div className="editor-container">
                    <div className="left-panel">
                        <div className="widget-crud">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedTemplateName != '' ? selectedTemplateName : 'New Template'}
                                </button>
                                <ul className="dropdown-menu">
                                    {templateList.map((template, index) => (
                                        <li
                                            key={template.templateName + `_Item{${index}}`}
                                            onClick={(e) => ontemplateSelect(template)}
                                            className="dropdown-item"
                                        >
                                            {template.templateName}
                                        </li>

                                    ))}
                                </ul>
                            </div>
                            <div className='save-panel'>
                                <button className='pnl-reset' onClick={resetLayout}>
                                    <i className='bi bi-arrow-clockwise'></i>
                                    Reset</button>
                                <button className='pnl-save' onClick={saveTemplateData}>
                                    <i className='bi bi-cloud-arrow-up'></i>
                                    Save Template
                                </button>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"

                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"

                                        aria-controls="collapseOne"
                                    >
                                        Widget Components
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {widgets.map((widget, index) => (
                                            <li
                                                key={widget.i + `_Item{${index}}`}
                                                draggable
                                                onDragStart={(e) => onDragStart(e, widget)}
                                                style={{
                                                    marginBottom: '10px',
                                                    cursor: 'move',
                                                    padding: '5px',
                                                    backgroundColor: '#f0f0f0',
                                                    borderRadius: '5px',
                                                }}
                                            >
                                                {widget.i}
                                            </li>

                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="template-layout"  >
                        <div className='layout-contianer'>
                            <div
                                className="right-panel"
                                style={{ flex: 1, padding: '10px', overflow: 'auto' }}
                                onDrop={onDrop}
                                onDragOver={(e) => e.preventDefault()}  // Allow the drop by preventing the default behavior
                            >
                                <div className="drop-zone">
                                    <GridLayout
                                        className="layout"
                                        layout={layout}
                                        cols={12}
                                        // rowHeight={50}
                                        width={1050}
                                        margin={[0, 20]}
                                        allowOverlap={false}
                                        preventCollision={false}
                                        isBounded={true}
                                        onLayoutChange={onLayoutChange}
                                        isResizable={true}
                                        draggableHandle=".icon-drag"
                                    >
                                        {/* Dynamically render widgets based on the layout state */}
                                        {layout.map((item, index) => (
                                            <div key={item.i} className={`grid-item ${selectedWidget?.i === item.i ? "selected" : ""}`} onClick={(e) => onGridItemSelect(item)}   >
                                                <div className="remove-item">
                                                    <button
                                                        className="remove-button"
                                                        onClick={(e) => handleRemoveWidget(item.i, e)}
                                                    >
                                                        Remove  <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>
                                                {renderWidget(item)}
                                            </div>
                                        ))}
                                    </GridLayout>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-panel">
                        <div className='template-properties accordion' id='properties_controls'>
                            {
                                selectedWidget && (
                                    <div>
                                        <div className='accordion-item dimension'>
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#widget_dimension" aria-expanded="true" aria-controls="widget_dimension">
                                                    Dimensions
                                                </button>
                                            </h2>
                                            <div id="widget_dimension" className="accordion-collapse collapse show" data-bs-parent="#properties_controls">
                                                <div className="accordion-body">
                                                    <div className='hw'>
                                                        <div>

                                                            <span>Height</span>
                                                            <input
                                                                type="number"
                                                                value={selectedWidget.h}
                                                                onChange={(e) =>
                                                                    updateSelectedWidget("h", Number(e.target.value))
                                                                }
                                                            />
                                                        </div>
                                                        <div>
                                                            <span>Width</span>
                                                            <input
                                                                type="number"
                                                                value={selectedWidget.w}
                                                                max={12}
                                                                min={3}
                                                                onChange={(e) =>
                                                                    updateSelectedWidget("w", Number(e.target.value))
                                                                }
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="accordion-item position">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#widget_position" aria-expanded="true" aria-controls="widget_position">
                                                    Position
                                                </button>
                                            </h2>
                                            <div id="widget_position" className="accordion-collapse collapse  show" data-bs-parent="#properties_controls">
                                                <div className="accordion-body">
                                                    <div className='xy'>
                                                        <div>
                                                            <span>x </span>
                                                            <input
                                                                type="number"
                                                                value={selectedWidget.x}
                                                                onChange={(e) =>
                                                                    updateSelectedWidget("x", Number(e.target.value))
                                                                }
                                                            />
                                                        </div>
                                                        <div>
                                                            <span>Y</span> <input
                                                                type="number"
                                                                value={selectedWidget.y}
                                                                onChange={(e) =>
                                                                    updateSelectedWidget("y", Number(e.target.value))
                                                                }
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item properties">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#widget_properties" aria-expanded="true" aria-controls="widget_properties">
                                                    Properties
                                                </button>
                                            </h2>
                                            <div id="widget_properties" className="accordion-collapse collapse  show" data-bs-parent="#properties_controls">
                                                <div className="accordion-body">
                                                    {
                                                        selectedWidget.widgetType == 'Profile' && (
                                                            <div className='xy'>
                                                                <div>
                                                                    <span>Header Left</span>
                                                                    <input
                                                                        type="number"
                                                                        value={selectedWidget.x}
                                                                        onChange={(e) =>
                                                                            updateSelectedWidget("x", Number(e.target.value))
                                                                        }
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <span>Y</span> <input
                                                                        type="number"
                                                                        value={selectedWidget.y}
                                                                        onChange={(e) =>
                                                                            updateSelectedWidget("y", Number(e.target.value))
                                                                        }
                                                                    />
                                                                </div>

                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );

}

export default ReactAdminGridLayout;