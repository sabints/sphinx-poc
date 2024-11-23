import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './styles/global.scss'
import ReactAdminGridLayout from './features/Admin/ReactAdminGridLayout.jsx'
import AppLayuout from './components/Layout/app-layout.jsx'
import DashBoard from './features/Dashboard/DashboardPage.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import EngagementDetailsPage from './pages/EngagementPage/EngagementDetails.jsx'
import EngagementPage from './pages/EngagementPage/EngagementPage.jsx'

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
