import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/admin/Login';
import ShowUsers from '../pages/admin/ShowUsers'
import AdminProtectRouter from '../components/Admin/Routes/AdminProtectRouter'
import AdminPublicRoute from '../components/Admin/Routes/AdminPublicRoute'
import ReportedPost from '../pages/admin/ReportedPost'
import OneUser from '../pages/admin/OneUser'
import OnePostReport from '../pages/admin/OnePostReport'
import Notifications from '../pages/admin/Notifications'

function Admin() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<AdminPublicRoute><Login /></AdminPublicRoute>} />
        <Route path='/' element={<AdminProtectRouter><ShowUsers /></AdminProtectRouter>} />
        <Route path='/reportedPost' element={<AdminProtectRouter><ReportedPost /></AdminProtectRouter>} />
        <Route path='/oneUser' element={<AdminProtectRouter><OneUser /></AdminProtectRouter>} />
        <Route path='/OnePostReport' element={<AdminProtectRouter><OnePostReport /></AdminProtectRouter>} />
        <Route path='/userProfile' element={<AdminProtectRouter><OneUser/> </AdminProtectRouter>} />
        <Route path='/notifications' element={<AdminProtectRouter><Notifications/> </AdminProtectRouter>} />

      </Routes>
    </>
  );
}

export default Admin;
