import { useEffect, useState } from 'react';
import './layout.scss'
import NavbarComponent from './Navbar';

function HeaderComponent() {
    const [pageName, setPageName] = useState('')
    const [parameterName, setParameterName] = useState('')
    useEffect(() => {
        setPageName(window.location.hash.replace('#/', ''))
    }, [])
    return (<>
        <header className='header' data-bs-theme="light">
            <div className="navbar gap-5 shadow-sm">
                <a href="#" className="navbar-brand d-flex">
                    <img src={import.meta.env.BASE_URL + "/src/assets/images/barclays-logo.svg"} alt="" width="auto" />
                </a>
                <div className="search-container">
                    <i className="search_icon">
                        <img src={import.meta.env.BASE_URL + "/src/assets/images/search-icon.svg"} alt="" width="auto" />
                    </i>
                    <input type="text" placeholder="Query your data" />

                </div>
                <a href="#" className="navbar-brand d-flex">
                    <img src={import.meta.env.BASE_URL + "/src/assets/images/kpmg-logo.svg"} alt="" width="auto" />
                </a>
            </div>
            {
                pageName != '' && (
                    <div className='bread-crumbs'>
                        {`Braclays Bank UK PLC > FY 2024 Final audit > ${parameterName}`}
                    </div>
                )
            }
        </header>
        <NavbarComponent />
    </>)
}
export default HeaderComponent;