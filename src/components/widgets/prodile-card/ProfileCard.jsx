import PropTypes from 'prop-types'
import './profilecard.scss'
import '../../../styles/widgets-global.scss'

function ProfileCard({ properties }) {
    const { HeaderLeft, HeaderRight } = properties;
    return <>
        <div className="card prof_card">
            <div className="card-body">
                <div className="text-content-container">
                    <div className="card-header">
                        <span className="title">{HeaderLeft}</span>
                        <div className='icon-drag'>
                            <i className="bi bi-arrows-move"></i>
                        </div>
                        <span className="amount-text">{HeaderRight}</span>
                    </div>
                    <div className="txt-content">
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
                        <img src={import.meta.env.BASE_URL + "images/auditor.png"} alt="" />
                        <div className="video-link">
                        <a href="">
                            <i className="play_icon">
                            <img src={import.meta.env.BASE_URL + "images/play-icon.svg"} alt="" />
                            </i>
                        </a>
                    </div>
                    </div>
                    <span className="profile-name">
                        Allie Baker
                        <span className='role'> Sr. Auditor</span>
                    </span>
                </div>
            </div>
        </div>
    </>
}

// Define PropTypes for styleOptions
ProfileCard.propTypes = {
    properties: PropTypes.shape({
        HeaderLeft: PropTypes.string.isRequired,
        HeaderRight: PropTypes.string.isRequired, 
    }).isRequired, // styleOptions itself is required
};


export default ProfileCard;