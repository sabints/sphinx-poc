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

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/interactive-dashboard' element={<DashBoard />} />
      <Route path='/admin/template-editor' element={<TemplateEditor />} /> 
      <Route path='/admin/admin-grid' element={<ReactAdminGridLayout />} /> 
    </Routes>
  )
}

export default App
