import './chartCard.scss'
import '../../../styles/widgets-global.scss'
function ChartCard() {
    return (

        < div className="card-widget chart_card" >
            <div className="card-header">
                <div className="header-left">
                <div className="icon_ tv_icon">
                        <img src={import.meta.env.BASE_URL +"/src/assets/images/chart-icon.svg"} alt="" width="auto" />
                    </div>
                    <div className='widget-header-style'>
                        <h3 className="title">Chart Image</h3>
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