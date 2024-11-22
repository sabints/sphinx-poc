import { property } from 'lodash';
import PropTypes from 'prop-types'
import './ribbon.scss'

function ContentRibbonWidget({ properties }) {
    const { image, heading, textContent, list } = properties;
    return (
        <>
            <div className='ribbon-widget'>
                {
                    textContent != '' && (
                        <div className='info-image'>
                            {
                                image != "" && (

                                    <div className='img-container'>
                                        <img src={image} alt={heading} />
                                    </div>

                                )
                            }
                            {
                                <div className='info-container'>
                                    {heading && <h2>{heading}</h2>}
                                    {textContent && <p>{textContent}</p>}
                                </div>
                            }

                        </div>
                    )
                }

                <div className='ribbon-list'>
                    {list &&
                        list.map((item, index) => (
                            <div key={index} className={index % 2 === 0 ? '  items gradient-one' : 'items gradient-two'}>

                                <>
                                    <div className='item-content'>
                                        <h3>{item.heading}</h3>
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

ContentRibbonWidget.PropTypes = {
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