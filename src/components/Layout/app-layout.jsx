import { Outlet } from "react-router-dom";
import HeaderComponent from "./Header";
import './layout.scss'

function AppLayuout() {

    return (
        <>
            <div className="app-layout">
                <div className="background-top">
                    
                </div>
                <HeaderComponent />
                <main className="app-mainq">
                    <Outlet />
                </main>
            </div>
        </>
    )
}
export default AppLayuout;