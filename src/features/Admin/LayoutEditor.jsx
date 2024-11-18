import React from "react";
import * as  _loadDash from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { v4 as guid } from 'uuid';
import './admin.scss'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const ResponsiveReactGridLayout = WidthProvider(Responsive);



const ToolboxItem = (props) => {
    const { toolboxItem, onDragStart } = props;
    const { type } = toolboxItem;
    return (
        <div
            draggable={true}
            className="toolbox-item"
            key={toolboxItem.id}
            onDragStart={onDragStart}
        >
            {toolboxItem.id}
        </div>
    );
};

//#region  Intesect Checking
//===================================================================================================
//This function checks if two boxes (box1 and box2) intersect in the grid.
//It returns true if the boxes overlap and false if they don’t.
//===================================================================================================
function boxIntersect(box1, box2) {
    return (
        Math.max(box1.x, box2.x) < Math.min(box1.x + box1.w, box2.x + box2.w) &&
        Math.max(box1.y, box2.y) < Math.min(box1.y + box1.h, box2.y + box2.h)
    );
}
//#endregion


//#region Make Space for New Item 
//===================================================================================================
//adjusts items that intersect with newItem to prevent overlap by shifting their y position
//It performs a breadth-first search, pushing intersecting items downwards to make space for the new item.
//Returns a modified layout with adjusted positions.
//===================================================================================================
function makeSpacefornewItem(_item, _newItem) {
    const que = [_newItem];
    const _newLayout = [_newItem];
    const visited = {};
    while (que.length) {
        for (let size = que.length; size > 0; --size) {
            const it = que.shift();
            for (let item of _item) {
                {
                    if (boxIntersect(item, it) && !visited[item.i]) {
                        visited[item.i] = true;
                        const pushedItem = { ...item, y: it.y + it.h };
                        q.push(pushedItem);
                        _newLayout.push(pushedItem);
                    }
                }
            }
        }
    }
    for (let item of _item) {
        if (!visited[item.i]) {
            _newLayout.push(item);
        }
    }
    return _newLayout;
}
//#endregion




//#region  Component 
//===================================================================================================
class LayoutEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            widgetItems: [],
            layouts: { lg: [] },
            toolboxItem: [],
            breakpoint: 'lg',
            nextId: guid()

        }
    }

    //#region Fetch Functions
    async fetchWidgetList() {
        const widgetCollection = await getDocs(collection(db, "WidgetList"));
        const widgetsData = widgetCollection.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            layoutConfig: doc.data().LayoutConfig,
            icon: doc.data().icon,
        }));
        this.setState({
            widgetItems: widgetsData,
            layouts: { lg: this.generateLayout(widgetsData) },
            toolboxItem: widgetsData
        })
    }
    componentDidMount() {
        this.fetchWidgetList();
    }
    //#endregion

    //#region  Generate Layout
    generateLayout(widgetItems) {
        return widgetItems.map((_item) => {
            return {
                id: guid(),
                i: guid(),
                name: _item.name,
                x: Number(_item.layoutConfig.x || 0),   // Default value if not provided
                y: Number(_item.layoutConfig.y || 0),
                w: Number(_item.layoutConfig.w || 2),
                h: Number(_item.layoutConfig.h || 2),
                minW: Number(_item.layoutConfig.minW || 1),
                maxW: Number(_item.layoutConfig.maxW || 1),
                minH: Number(_item.layoutConfig.minH || 2),
                maxH: Number(_item.layoutConfig.maxH || 2),
                isDraggable: _item.layoutConfig.isDraggable,
                isResizable: _item.layoutConfig.isResizable,
                icon: _item.icon,
            }
        })
    }
    //#endregion
    //#region Resolver
    //===================================================================================================
    //The resolver function is used to track changes and invalidate the memoized result if necessary.
    //isEditing: Enables/disables edit mode for grid items.
    //layouts: Stores layout information, generated with generateLayout
    //breakpoint: Tracks the current layout breakpoint (e.g., "lg")
    //===================================================================================================
    resolver = () => {
        JSON.stringify({
            layouts: this.state.layouts,
            isEditing: this.state.isEditing,
            breakpoint: this.state.breakpoint
        })
    }
    //#endregion

    //#region 
    //===================================================================================================
    //memoizedItems caches layout items for efficiency.
    //===================================================================================================
    memoizedItems = _loadDash.memoize(() => {
        const { layouts, breakpoint } = this.state;
        return layouts[breakpoint].map(({ i, name }) => (
            // renderWidget(name, null)
            < div key = { i } >
                <div style={{ fontSize: 12 }}>id: {i}</div>
                <div style={{ fontWeight: 'bold' }}>I am {name}</div>
            </div >
        ));

    }, this.resolver)

    renderWidget = (widgetTypename, WidgetType) => {
        switch (widgetTypename) {
            case 'ProfileWidget':
                return <ProfileCard />;
            case 'ChartWidget':
                return <ChartCard />;
            case 'DocumentWidget':
                return <DocumentCard />;
            case 'MediaWidget':
                return <MediaCard />;
            default:
                return null;
        }
    };
    //#endregion


    //#region  Event Handlers
    //===================================================================================================
    handleDrop = (_layout, item, e) => {
        const { toolboxItem, layouts } = this.state;
        const { widgetType } = toolboxItem;
        const _newLayout = _loadDash.clone(layouts);
        const _newItem = {
            ...item,
            isDraggable: item.isDraggable,
            isResizable: item.isResizable,
        };
        Object.keys(_newLayout).map((size) => {
            _newItem[size] = makeSpacefornewItem(_newLayout[size], _newItem)
        });

        this.setState({ layouts: _newLayout, nextId: guid() });
        this.dropping = true;
    }

    handleDragStart = (item, e) => {
        this.setState({ toolboxItem: [item] });
    }

    getDroppingItem = () => {
        const { toolboxItem, nextId } = this.state;
        if (!toolboxItem) {
            return null;
        }
        const defaultItem = {
            w: 2, // Default width (adjust as per your layout requirements)
            h: 2, // Default height
            x: 0, // Default x position
            y: 0, // Default y position
            minW: 2, // Default minimum width
            minH: 2, // Default minimum height
            maxW: 4, // Default maximum width (optional)
            maxH: 4, // Default maximum height (optional)
        };
        // Return the item with the required properties, including defaults if missing
        return { ...toolboxItem, i: nextId, ...defaultItem };
    };

    handleEditing = (e) => {
        this.setState({ isEditing: e.target.checked });
    };

    handleLayoutChange = (layout, layouts) => {
        if (this.dropping) {
            return;
        }

        const { nextId } = this.state;
        if (layout.find(({ i }) => i === nextId)) {
            return;
        }

        const newLayouts = _loadDash.cloneDeep(layouts);
        Object.keys(newLayouts).map((size) => {
            newLayouts[size] = newLayouts[size].map((item, index) => {
                const original = this.state.layouts[size] || this.state.layouts.lg;
                return { ...original[index], ...item };
            });
        });

        this.setState({ layouts: newLayouts });
    };

    handleBreakpointChange = (breakpoint) => this.setState({ breakpoint });
    //#endregion


    //#region Render Elements
    render() {
        const { layouts, isEditing, breakpoint } = this.state;
        const droppingItem = this.getDroppingItem();
        this.dropping = false;
        return (
            <div>
                <div style={{ marginBottom: 10 }}>
                    <input
                        type="checkbox"
                        value={isEditing}
                        onChange={this.handleEditing}
                    />
                    {isEditing ? 'Editing' : 'Not Allow To Edit'}
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        border: '1px solid skyblue',
                        padding: 20,
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}
                >
                    {this.state.toolboxItem && this.state.toolboxItem.length > 0 ? (
                        this.state.toolboxItem.map((item, index) => (
                            <ToolboxItem
                                key={item.type + `_tbi` + index}
                                toolboxItem={item}
                                onDragStart={(e) => this.handleDragStart(item, e)}
                            />
                        ))
                    ) : (
                        <div>No toolbox items available</div>
                    )}
                </div>
                <ResponsiveReactGridLayout
                    className="layout"
                    rowHeight={100}
                    layouts={layouts}
                    isDroppable={true}
                    isDraggable={isEditing}
                    isResizable={isEditing}
                    onDrop={this.handleDrop}
                    droppingItem={droppingItem}
                    // preventCollision={true}
                    // isBounded={true}
                    // onLayoutChange={this.handleLayoutChange}
                    onBreakpointChange={this.handleBreakpointChange}
                >
                    {this.memoizedItems()}
                    {/* {layouts[breakpoint].map(({ i, type }) => (
                        <div key={i}>
                            <div style={{ fontSize: 12 }}>id: {i}</div>
                            <div style={{ fontWeight: "bold" }}>I am {type}</div>
                        </div>
                    ))} */}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
    //#endregion
}
//===================================================================================================
//#endregion


export default LayoutEditor;