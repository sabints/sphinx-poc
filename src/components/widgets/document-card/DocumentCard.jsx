import './documentCard.scss'
import '../../../styles/widgets-global.scss'
function DocumentCard({ title }) {
    return <div>

        {/* <div className="card-widget" >
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
        </div> */}

        <div className="card-widget media_card">
            <div className="card-header">
                <div className="header-left">
                    <div className="icon_ tv_icon">
                        {/* <img src={import.meta.env.BASE_URL + "/src/assets/images/tv-icon.svg"} alt="" width="auto" /> */}
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#FD349C" />
                            <path d="M21.3333 9.33337H13.3333C12.6 9.33337 12 9.93337 12 10.6667V18.6667C12 19.4 12.6 20 13.3333 20H21.3333C22.0666 20 22.6666 19.4 22.6666 18.6667V10.6667C22.6666 9.93337 22.0666 9.33337 21.3333 9.33337ZM21.3333 18.6667H13.3333V10.6667H21.3333V18.6667ZM10.6666 12H9.33331V21.3334C9.33331 22.0667 9.93331 22.6667 10.6666 22.6667H20V21.3334H10.6666V12ZM18.6666 16V14C18.6666 13.6334 18.3666 13.3334 18 13.3334H16.6666V16.6667H18C18.3666 16.6667 18.6666 16.3667 18.6666 16ZM17.3333 14H18V16H17.3333V14ZM20 15.3334H20.6666V14.6667H20V14H20.6666V13.3334H19.3333V16.6667H20V15.3334ZM14.6666 15.3334H15.3333C15.7 15.3334 16 15.0334 16 14.6667V14C16 13.6334 15.7 13.3334 15.3333 13.3334H14V16.6667H14.6666V15.3334ZM14.6666 14H15.3333V14.6667H14.6666V14Z" fill="#FBFBFB" />
                        </svg>

                    </div>
                    <div className='widget-header-style'>
                        <h3 className="title">{title}</h3>

                    </div>
                </div>
                <div className="header-right">
                    <div className='icon-drag'>
                        <i className="bi bi-arrows-move"></i>
                    </div>
                    <div className="icon_ comment-icon">
                        <img src={import.meta.env.BASE_URL + "/src/assets/images/chat-icon.svg"} alt="" width="auto" />
                    </div>
                    <div className="icon_ expand-icon">
                        <img src={import.meta.env.BASE_URL + "/src/assets/images/expand-icon.svg"} alt="" width="auto" />
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className='document-preview'>
                    <img src='https://s3-alpha-sig.figma.com/img/0713/3807/042c349f309fea30d33a5c6a301a8dd8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g4sPTYgih0yAl5faB-adKALxRDJm4k9FlRt3Adx5FmkVXI23Kug7IHqlLUUTdVJQy9mKwS3xIeJa90sycbcq8zS9C4xVHWLng9aVYN3nOLqbPrINBZZ4V6KSXZluftAXdO-P-l7~9q4L91MAwX33FFR3lF4ONmkkcBYyS-b0Pqaggv8Mce01EMitzN8NHSNuvUANyqxdSTG9cfd1AfJIwzxfJRXG4slhx~n-fCXH5l8zV4qXLtW41jrqPxMNZJ~TXn-FWBqbNlDlIzNV9lXbNXMmkHcUK9lZmI16ozUbJkZ2GhukM0~53Nl64JSwWO6qMVGBOexcq9DRVMWy3NLz2g__' />
                </div>
            </div>
        </div>
    </div>
}

export default DocumentCard;