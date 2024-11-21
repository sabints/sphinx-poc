import React from 'react';

const WidgetPropertyInput = ({ widgetType, label, value, onChange }) => {
    return (
        <>
            {
                widgetType == 'Text' && (

                    <><div className='xy'>
                        <div>
                            <span>Text</span>
                            <input
                                type="text"
                                value={selectedWidget.properties.Text}
                                onChange={(e) => updateSelectedWidget("Text", e.target.value)} />
                        </div>
                        <div>
                            <span>Font Size</span> <input
                                type="number"
                                value={selectedWidget.properties.FontSize}
                                onChange={(e) => updateSelectedWidget("FontSize", Number(e.target.value))} />
                        </div>

                    </div><div className='xy'>
                            <div>
                                <span>Bold</span>
                                <input
                                    type="checkbox"
                                    checked={selectedWidget.properties.IsBold === true}
                                    onChange={(e) => updateSelectedWidget("IsBold", e.target.checked)} />
                            </div>
                            <div>
                                <span>Italics</span>
                                <input
                                    type="checkbox"
                                    checked={selectedWidget.properties.Italics === false}
                                    onChange={(e) => updateSelectedWidget("Italics", e.target.checked)} />
                            </div>
                            <div>
                                <span>Color</span>
                                <input
                                    type="color"
                                    value={selectedWidget.properties.Color || "#000000"} // Default to black if color is not set
                                    onChange={(e) => updateSelectedWidget("Color", e.target.value)} // Update the color property
                                />
                            </div>
                        </div></>

                )
            }{
                widgetType == 'Profile' && (
                    <>
                        <div className='xy'>
                            <div>
                                <span>Header Text Left</span>
                                <input
                                    type="text"
                                    value={selectedWidget.properties.Text}
                                    onChange={(e) => updateSelectedWidget("Text", e.target.value)} />
                            </div>


                        </div>
                        <div className='xy'>

                            <div>
                                <span>Header Text Right</span> <input
                                    type="number"
                                    value={selectedWidget.properties.FontSize}
                                    onChange={(e) => updateSelectedWidget("FontSize", Number(e.target.value))} />
                            </div>

                        </div>
                    </>
                )
            }
        </>
    );
};

export default WidgetPropertyInput;

{/* <div>
<span>{label}</span>
<input
    type="number"
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
/>
</div> */}