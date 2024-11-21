import './layout.scss'

function HeaderComponent() {
    return (<>
        <header className='header' data-bs-theme="light">
            <div className="navbar gap-5 shadow-sm">
                <a href="#" className="navbar-brand d-flex">
                    <img src={import.meta.env.BASE_URL + "/src/assets/images/barclays-logo.svg"} alt="" width="auto" />
                </a>
                <div className="search-container">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Query your data" /> 
                </div>
                <a href="#" className="navbar-brand d-flex">
                    <img src={import.meta.env.BASE_URL + "/src/assets/images/kpmg-logo.svg"} alt="" width="auto" />
                </a>
            </div>
        </header>
    </>)
}
export default HeaderComponent;