import PropTypes from 'prop-types'

function TextWidget({ properties }) {
    const { Color, Text, FontSize, IsBold, Italics } = properties;

    return (
        <div
            style={{
                color: Color,
                fontSize: `${FontSize}px`,
                fontWeight: IsBold ? 'bold' : 'normal',
                fontStyle: Italics ? 'italic' : 'normal',
                lineHeight: 1.2, // Maintain proper line height for wrapping 
                overflow: 'hidden', // Ensures any overflow is hidden
                wordWrap: 'break-word', // Wraps long words
                whiteSpace: 'normal', // Enables wrapping for text 
                display: 'flex', // Centers the text horizontally and vertically
                alignItems: 'center',
                justifyContent: 'flex-start',
                background:transperant
            }}
        >
            <div className='icon-drag'>
                <i className="bi bi-arrows-move"></i>
            </div>
            {Text ? Text :'Place Holder Text'}
        </div>
    )
}

// Define PropTypes for styleOptions
TextWidget.propTypes = {
    properties: PropTypes.shape({
        Color: PropTypes.string.isRequired,     // Color should be a string
        Text: PropTypes.string.isRequired,      // Text should be a string
        FontSize: PropTypes.number.isRequired,  // FontSize should be a number
        IsBold: PropTypes.bool.isRequired,      // IsBold should be a boolean
        IsItalic: PropTypes.bool.isRequired,    // IsItalic should be a boolean
    }).isRequired, // styleOptions itself is required
};

export default TextWidget;