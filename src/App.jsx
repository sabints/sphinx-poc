import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashBoard from './features/Dashboard/DashboardPage'

import './firebase'
import TemplateEditor from './features/Admin/TemplateEditor'
import ReactAdminGridLayout from './features/Admin/ReactAdminGridLayout'
import EngagementPage from './pages/EngagementPage'
import EngagementDetailsPage from './pages/EngagementDetails'
import AppLayuout from './components/Layout/app-layout'
import './styles/global.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<AppLayuout />} />
      <Route index path='/home' element={<HomePage />} />
      <Route path='/engagement' element={<EngagementPage />} />
      <Route path='/engagement-details' element={<EngagementDetailsPage />} />
      <Route path='/admin' element={<ReactAdminGridLayout />} />
      <Route path='/dashboard' element={<DashBoard />} />
    </Routes>
  )
}

export default App
