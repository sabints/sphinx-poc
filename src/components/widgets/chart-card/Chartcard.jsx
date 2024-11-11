import './chartCard.scss'
import '../../../styles/widgets-global.scss'
function ChartCard() {
    return (

        < div className="card-widget" >
            <div className="card-header">
                <div className="header-left">
                    <div className="icon">
                        <i className="bi bi-graph-up"></i>
                    </div>
                    <h3 className="title">Widget Title</h3>
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
                <div className="tabs">
                    <button type='button' className="tab active">Tab 1</button>
                    <button type='button' className="tab">Tab 2</button>
                    <button type='button' className="tab">Tab 3</button>
                </div>
                <div className="tab-content">
                    <div className="tab-pane active">
                        <p>Content for Tab 1</p>
                    </div>
                    <div className="tab-pane">
                        <p>Content for Tab 2</p>
                    </div>
                    <div className="tab-pane">
                        <p>Content for Tab 3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartCard;