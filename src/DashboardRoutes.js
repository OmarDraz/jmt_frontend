import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Patients from './pages/Patients';
import Sessions from './pages/Sessions';

function DashboardRoutes() {
  const isAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate()
  useEffect(() => {
    if(!isAuthenticated){
      navigate('/admin/login')
    }
  }, [isAuthenticated, navigate])
  return (
    <div className='jmt-dashboard'>
        <Sidebar />
        <div className='content'>
        <Routes>
          <Route path='/patients' element={<Patients />} />
          <Route path='/sessions' element={<Sessions />} />
        </Routes>
        </div>
    </div>
  )
}

export default DashboardRoutes