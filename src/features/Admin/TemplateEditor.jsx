import { useEffect, useRef, useState } from 'react';
import './admin.scss';

import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import ProfileCard from '../../components/widgets/prodile-card/ProfileCard';
import ChartCard from '../../components/widgets/chart-card/Chartcard';
import DocumentCard from '../../components/widgets/document-card/DocumentCard';
import MediaCard from '../../components/widgets/media-card/MediaCard';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


//#region Left Panel List of Widgets
//The WidgetListComponent component is a React functional component that represents each individual widget item in the left panel. 
//This component uses the React DnD (Drag and Drop) library to enable dragging behavior so the widget can be dragged and dropped onto 
//a different part of the UI (in this case, a layout on the right panel).
// _widget ::he widget object containing data for this specific widget (such as id, name, and any other properties).
// _windex :: The position of this widget within a list, useful for tracking or ordering.
const WidgetListComponent = ({ _widget, _windex }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'widget',
        item: { _widget, _windex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()  // Corrected syntax here
        })
    });

    return (
        <div
            ref={drag}
            key={_windex}
            className='widget-list-container'
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            <div className='wl-preview'>
                <span dangerouslySetInnerHTML={{ __html: _widget.icon }} />
            </div>
            <div className='wl-name'>
                {_widget.id}
            </div>
        </div>
    )
}
//#endregion

//#region  PageLayout 
//The PageLayout component represents the right panel where widgets can be dropped to form a customized layout. 
//This component uses React DnD’s useDrop hook to enable the drop functionality, 
//allowing widgets dragged from the left panel to be added to the layout.

//  _layout :: The current layout array, which contains the widgets that have been added to the layout panel.
// _setLayout :: A function to update the layout state when a new widget is added
// accept :: Specifies that this drop zone will accept items of type widget (set in the Widget component).
// drop :: This function is triggered when a widget is dropped onto the layout. The _widgetItem parameter contains the data from the dragged widget
// collect:  Monitors the hover state of the drop zone, setting isOver to true when an item is hovering over the drop zone, 
//           which could be used for visual feedback.
const PageLayout = ({ _layout, _setLayout, _rowHeight }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'widget',
        drop: (_widgetItem) => {
            debugger;
            const { _widget } = _widgetItem;
            //create layout using widgets own layout configurations x,y, h, w
            const newLayout = [
                ..._layout,
                {
                    i: _widget.id,
                    x: _widget.x,
                    y: _widget.y,
                    h: _widget.h || 2,
                    w: _widget.w || 2,
                    minW: _widget.minW || 2,
                    maxW: _widget.maxW || 6,
                    minH: _widget.minH || 2,
                    maxH: _widget.maxH || 6,
                    isDraggable: _widget.isDraggable,
                    isResizable: true
                }
            ];
            _setLayout(newLayout)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    })

    const renderWidget = (widgetTypename, WidgetType) => {
        switch (widgetTypename) {
            case 'ProfileWidget':
                return <ProfileCard data={WidgetType} />;
            case 'ChartWidget':
                return <ChartCard data={WidgetType} />;
            case 'DocumentWidget':
                return <DocumentCard data={WidgetType} />;
            case 'MediaWidget':
                return <MediaCard data={WidgetType} />;
            default:
                return null;
        }
    };

    const handleDrop = () => {

    }

    return (
        <div ref={drop}  >
            <GridLayout
                className="layout"
                layout={_layout}
                cols={12}
                rowHeight={_rowHeight}
                width={1400}
                isDraggable={true}
                onDrop={handleDrop}
                isResizable={true}
                autoSize={true}
                allowOverlap={false}
                >
                {_layout.map((item, index) => (
                    <div key={item.i + '_container'}>
                        <div key={item.i + `_widget-${index}`} className="layout-item">
                            {renderWidget(item.i, item)}
                        </div>
                    </div>
                ))}
            </GridLayout>
        </div>
    )
}
//#endregion






//#region  PageLayoutContainer
function TemplateEditor() {
    const [widgets, setWidgets] = useState([]);
    const [layout, setLayout] = useState([]);

    //#region 
    const [rowHeight, setRowHeight] = useState(150);  // Initial rowHeight
    const widgetRef = useRef([]);

    // Function to update rowHeight dynamically based on widget heights
    const calculateRowHeight = () => {
        let maxHeight = 0;

        widgetRef.current.forEach((widget) => {
            if (widget) {
                const widgetHeight = widget.clientHeight; // Get the height of the widget
                maxHeight = Math.max(maxHeight, widgetHeight);
            }
        });

        setRowHeight(maxHeight + 10); // Add some margin/padding if needed
    };
    //#endregion

    useEffect(() => {
        // Fetch widgets from Firestore
        const fetchWidgets = async () => {
            const widgetCollection = await getDocs(collection(db, "WidgetList"));
            const widgetsData = widgetCollection.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                x: Number(doc.data().LayoutConfig.x || 0),   // Default value if not provided
                y:  Number(doc.data().LayoutConfig.y || 0),
                w:  Number(doc.data().LayoutConfig.w || 2),
                h:  Number(doc.data().LayoutConfig.h || 2),
                minW: Number( doc.data().LayoutConfig.minW || 2),
                maxW:  Number(doc.data().LayoutConfig.maxW),
                minH: Number( doc.data().LayoutConfig.minH || 2),
                maxH:  Number(doc.data().LayoutConfig.maxH),
                isDraggable: doc.data().LayoutConfig.isDraggable,
                isResizable: doc.data().LayoutConfig.isResizable,
                icon: doc.data().icon,
            }));
            setWidgets(widgetsData);
        };

        fetchWidgets();
        // Calculate row height whenever the layout changes
        calculateRowHeight();
    }, [layout]);

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
                <DndProvider backend={HTML5Backend}>
                    <div className="editor-container">
                        <div className="left-panel">
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
                                            {widgets.length > 0 ? (
                                                widgets.map((data, index) => (
                                                    <WidgetListComponent
                                                        key={data.id} _widget={data} _windex={index} />

                                                ))
                                            ) : (
                                                <span>Loading...</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="template-layout"  >
                            <div className='layout-contianer'>
                                <PageLayout _layout={layout} _setLayout={setLayout} _rowHeight={rowHeight} />
                            </div>
                        </div>

                        <div className="right-panel">
                            <div className='save-panel'>
                                <button className='pnl-reset'>
                                    <i className='bi bi-arrow-clockwise'></i>
                                    Reset</button>
                                <button className='pnl-save'>
                                    <i className='bi bi-cloud-arrow-up'></i>
                                    Save Template
                                </button>
                            </div>
                            <div className='template-properties accordion' id='properties_controls'>
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
                                                    <input type='text' placeholder='number' />
                                                </div>
                                                <div>
                                                    <span>Width</span><input type='text' placeholder='number' />
                                                </div>

                                            </div>
                                            <div className='mh-mh'>
                                                <div>
                                                    <span>Min Height</span><input type='text' placeholder='number' />
                                                </div>
                                                <div>
                                                    <span>Max Height</span><input type='text' placeholder='number' />
                                                </div>
                                            </div>
                                            <div className='mw-mw'>
                                                <div>
                                                    <span>Min Width</span><input type='text' placeholder='number' />
                                                </div>
                                                <div>
                                                    <span>Max Width</span><input type='text' placeholder='number' />
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
                                                    <span>X</span><input type='text' placeholder='number' />
                                                </div>
                                                <div>
                                                    <span>Y</span><input type='text' placeholder='number' />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DndProvider>
            </section>

        </div>
    )
}

//#endregion


export default TemplateEditor;
