import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createHashRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/global.scss'
import ReactAdminGridLayout from './features/Admin/ReactAdminGridLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import EngagementPage from './pages/EngagementPage.jsx'
import EngagementDetailsPage from './pages/EngagementDetails.jsx'
import AppLayuout from './components/Layout/app-layout.jsx'
import DashBoard from './features/Dashboard/DashboardPage.jsx'
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
const _router = createHashRouter([
  {
    path: '/',
    element: <AppLayuout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'engagement', element: <EngagementPage /> },
      { path: 'engagement-details', element: <EngagementDetailsPage /> },
      { path: 'admin', element: <ReactAdminGridLayout /> },
      { path: 'dashboard', element: <DashBoard /> },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={_router} />
  </StrictMode>,
)
