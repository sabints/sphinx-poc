import { HashRouter, Navigate, Route, Router, Routes } from "react-router-dom"
import AppLayuout from "../components/Layout/app-layout"
import HomePage from '../pages/Home/HomePage'
import EngagementPage from '../pages/EngagementPage/EngagementPage'
import EngagementDetailsPage from '../pages/EngagementPage/EngagementDetails'
import NotFoundPage from '../pages/Misc/NotFoundPage'
import ReactAdminGridLayout from "../features/Admin/ReactAdminGridLayout"
import DashBoard from "../features/Dashboard/DashboardPage"
import { useAuth } from "../features/Auth/AuthProvider"
import ErrorPage from "../pages/Misc/ErrorPage"


const ProtectedRoute = ({ children }) => {
    debugger;
    const { state } = useAuth();
    const isAuthenticated =false;// !!state.user;
    return isAuthenticated ? children : <Navigate to="un-authorized" replace />
}



const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                {/* Public Route */}
                <Route path="/un-authorized" element={<ErrorPage />} />

                {/* Protected Routes */}
                <Route path="/" element={<ProtectedRoute><AppLayuout /></ProtectedRoute>} >
                    <Route index element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/engagement" element={<EngagementPage />} />
                    <Route path="/engagement-details" element={<EngagementDetailsPage />} />
                    <Route path="/admin" element={<ReactAdminGridLayout />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Route>

                {/* Catch-All for Unknown Routes */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </HashRouter>
    )
}
export default AppRoutes;