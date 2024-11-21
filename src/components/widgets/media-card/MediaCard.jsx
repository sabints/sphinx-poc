import './mediaCard.scss'
import '../../../styles/widgets-global.scss'
function MediaCard() {
    return <>

        <div className="card-widget media_card">
            <div className="card-header">
                <div className="header-left">
                    <div className="icon_ tv_icon">
                        <img src={import.meta.env.BASE_URL +"/src/assets/images/tv-icon.svg"} alt="" width="auto" />
                    </div>
                    <div className='widget-header-style'>
                        <h3 className="title">Media Title</h3>
                        {/* <span className='sub-title'  >Media Sub Title / Short Description</span> */}
                    </div>
                </div>
                <div className="header-right">
                    <div className='icon-drag'>
                        <i className="bi bi-arrows-move"></i>
                    </div>
                    <div className="icon_ comment-icon">
                        <img src={import.meta.env.BASE_URL +"/src/assets/images/chat-icon.svg"} alt="" width="auto" />
                    </div>
                    <div className="icon_ expand-icon">
                        <img src={import.meta.env.BASE_URL +"/src/assets/images/expand-icon.svg"} alt="" width="auto" />
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className='media-preview'>
                    <div>
                    <iframe width="" height="" src="https://www.youtube.com/embed/gG9z2uh5R6I?si=LHg7Es76r4l29zp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default MediaCard;