import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/sphinx-poc/'>
      <Routes>
        <Route path='*' element={<App />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
