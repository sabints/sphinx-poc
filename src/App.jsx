import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashBoard from './features/Dashboard/DashboardPage'

import './firebase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/interactive-dashboard' element={<DashBoard />} />
    </Routes>
  )
}

export default App
