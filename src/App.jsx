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
      <Route path='/' element={<DashBoard />} />
      <Route path='/admin' element={<ReactAdminGridLayout />} />
    </Routes>
  )
}

export default App
