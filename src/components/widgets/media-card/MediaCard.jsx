import './mediaCard.scss'
import '../../../styles/widgets-global.scss'
function MediaCard() {
    return <div>

        < div className="card-widget" >
            <div className="card-header">
                <div className="header-left">
                    <div className="icon">
                        <i className="bi bi-camera-reels"></i>
                    </div>
                    <div className='header-style'>
                        <h3 className="title">Media Title</h3>
                        <span className='sub-title'  >Media Sub Title / Short Description</span>
                    </div>
                </div>
                <div className="header-right">
                    <div className='icon-drag'>
                        <i className="bi bi-arrows-move"></i>
                    </div>
                    <div className="icon comment-icon">
                        <i className="bi bi-chat-right-text"></i>
                    </div>
                    <div className="icon expand-icon">
                        <i className="bi bi-arrows-angle-expand"></i>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className='media-preview'>
                    <div>
                        <i className="bi bi-play-circle"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MediaCard;