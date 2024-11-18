import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter, createHashRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ReactAdminGridLayout from './features/Admin/ReactAdminGridLayout.jsx'
const _router = createHashRouter([
  {
    path: '/*',
    element: <App />, children: [
      {
        path: 'admin',
        element: <ReactAdminGridLayout />
      } 
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={_router} />
  </StrictMode>,
)
