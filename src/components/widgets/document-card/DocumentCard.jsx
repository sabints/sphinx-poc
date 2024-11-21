import './documentCard.scss'
import '../../../styles/widgets-global.scss'
function DocumentCard() {
    return <div>

        < div className="card-widget" >
            <div className="card-header">
                <div className="header-left">
                    <div className="icon">
                        <i className="bi bi-file-text"></i>
                    </div>
                    <div className='widget-header-style'>
                        <h3 className="title">Document Title</h3>
                        <span className='sub-title'  >Document Sub Title / Short Description</span>
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
                <div className='document-preview'>

                </div>
            </div>
        </div>
    </div>
}

export default DocumentCard;