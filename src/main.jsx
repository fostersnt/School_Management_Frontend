import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from './screens/layouts/Admin.jsx'
import Dashboard from './screens/admin/Dashboard.jsx'
import ProtectedRoute from './security/RouteProtector.jsx'
import NotFound from './screens/NotFound.jsx'
import LoginPage from './screens/LoginPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFound />} />
        {/* Admin layout route below */}
        <Route path='admin' element={
          <ProtectedRoute isAllowed={false}>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
