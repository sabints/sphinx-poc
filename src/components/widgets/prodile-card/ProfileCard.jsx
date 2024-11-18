
import './profilecard.scss'
import '../../../styles/widgets-global.scss'
function ProfileCard() {
    return <div>
        <div className="card">
            <div className="card-header">
                <span className="title">FY-2024 Final Audit</span>
                {/* <div className='icon-drag'>
                    <i class="bi bi-arrows-move"></i>
                </div> */}
                <span className="amount-text">4,200,000,000</span>
            </div>
            <div className="card-body">
                <div className="text-content-container">
                    <div className="tx-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text
                        <br /><br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting,
                    </div>
                    <div className="status-content">
                        <span className="info-status">
                            Completed <i className="bi bi-star"></i>
                        </span>
                        <span className="info-trend">
                            +9.3% <i className="bi bi-arrow-up"></i>
                        </span>
                    </div>
                    <p className="datetime">Update 10-14-2024</p>
                </div>
                <div className="image-content-container">
                    <div className="edit">
                        <a href="">
                            <i className="bi bi-pencil"></i>
                        </a>
                    </div>
                    <div className="image-container">
                        <img src="../src/assets/images/auditor.png" alt="" />
                    </div>
                    <span className="profile-name">
                        Allie Baker, Sr. Auditor
                    </span>
                    <div className="video-link">
                        <a href="">
                            <i className="bi bi-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileCard;