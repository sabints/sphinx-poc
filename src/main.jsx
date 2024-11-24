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
import App from './App.jsx'
import { AuthProvider } from './features/Auth/AuthProvider.jsx'

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
 
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
