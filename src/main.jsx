import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './screens/layouts/Admin.jsx'
import AdminProtectedRoute from './security/AdminRouteProtector.jsx'
import NotFound from './screens/NotFound.jsx'
import LoginPage from './screens/LoginPage.jsx'
import StaffLayout from './screens/layouts/Staff.jsx'
import ParentLayout from './screens/layouts/Parent.jsx'
import StaffProtectedRoute from './security/StaffRouteProtector.jsx'
import ParentProtectedRoute from './security/ParentRouteProtector.jsx'
import AdminDashboard from './screens/dashboards/AdminDashboard.jsx'
import ParentDashboard from './screens/dashboards/ParentDashboard.jsx'
import StaffDashboard from './screens/dashboards/StaffDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFound />} />

        //! Admin layout routes below
        <Route path='admin' element={
          <AdminProtectedRoute>
            <AdminLayout />
          </AdminProtectedRoute>
        }>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path='dashboard' element={<AdminDashboard />} />
        </Route>

        //! Staff layout routes below
        <Route path='staff' element={
          <StaffProtectedRoute>
            <StaffLayout />
          </StaffProtectedRoute>
        }>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path='dashboard' element={<StaffDashboard />} />
        </Route>

        //! Parent layout routes below
        <Route path='parent' element={
          <ParentProtectedRoute>
            <ParentLayout />
          </ParentProtectedRoute>
        }>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path='dashboard' element={<ParentDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
