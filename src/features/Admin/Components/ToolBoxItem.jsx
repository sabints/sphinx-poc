import { collection, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";


const ToolboxItem = (props) => {
    const { toolboxItem, onDragStart } = props;
    const { type } = toolboxItem;
    console[widgetList, setWidgetsList] = useState([])

    useEffect(() => {
        const fetchWidgetAsync = async () => {
            const promisData = await getDoc(collection(db, 'WidgetList'));
            const _widgetList = promisData.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                x: doc.data().LayoutConfig.x || 0,   // Default value if not provided
                y: doc.data().LayoutConfig.y || 0,
                w: doc.data().LayoutConfig.w || 2,
                h: doc.data().LayoutConfig.h || 2,
                minW: doc.data().LayoutConfig.minW || 2,
                maxW: doc.data().LayoutConfig.maxW,
                minH: doc.data().LayoutConfig.minH || 2,
                maxH: doc.data().LayoutConfig.maxH,
                isDraggable: doc.data().LayoutConfig.isDraggable,
                isResizable: doc.data().LayoutConfig.isResizable,
                icon: doc.data().icon,
            }));

            setWidgetsList(_widgetList);
        }
    }, [])
    return (
        <div
            draggable={true}
            className="toolbox-item"
            key={type}
            onDragStart={onDragStart}
        >
            {type}
        </div>
    );
}
export default ToolboxItem;