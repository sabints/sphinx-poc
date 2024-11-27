import PropTypes from 'prop-types'
import './ribbon.scss'

function ContentRibbonWidget({ properties }) {
    const { image, heading, textContent, list } = properties;
    return (
        <>
            <div className='ribbon-widget'>
                {
                    textContent != '' && (
                        <div className='container'>
                            <div className='row'>
                                <div className='col-sm-4 lft_img'>
                            {
                                image != "" && (

                                    <div className='img-container'>
                                        <img src={image} alt={heading} />
                                    </div>

                                )
                            }
                            </div>
                            {
                                <div className='col-sm-8'>
                                    <div className='txt_box'>
                                    {heading && <h2 className='head_'>{heading}</h2>}
                                    {textContent && <div className='txt_style'><p>{textContent}</p></div>}
                                    </div>
                                </div>
                            }

                        
                        </div>
                        </div>
                    )
                }

                <div className='ribbon-list'>
                    {list &&
                        list.map((item, index) => (
                            <div key={index} className={index % 2 === 0 ? '  items gradient-one' : 'items gradient-two'}>

                                <>
                                    <div className='item-content'>
                                        <h3 className='title_'>{item.heading}</h3>
                                        <ul>
                                            {item.listItem &&
                                                item.listItem.map((listItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <a target='_blank' href={listItem.url}>{listItem.text}</a>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </>
                            </div>

                        ))}
                </div>
            </div>
        </>
    )
}

ContentRibbonWidget.propTypes = {
    properties: PropTypes.shape({
        image: PropTypes.string,
        heading: PropTypes.string,
        textContent: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(
            PropTypes.shape({
                heading: PropTypes.string.isRequired, // Each list item requires a heading
                listItem: PropTypes.arrayOf(
                    PropTypes.shape({
                        url: PropTypes.string.isRequired, // Each list item's URL
                        text: PropTypes.string.isRequired // Each list item's text
                    })
                ).isRequired // listItem is required for each list
            })
        )
    })
}


export default ContentRibbonWidget;