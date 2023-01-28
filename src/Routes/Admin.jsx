import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHome from '../pages/admin/AdminHome';
import Login from '../pages/admin/Login';
import ShowUsers from '../pages/admin/ShowUsers'
import AdminProtectRouter from '../components/Admin/Routes/AdminProtectRouter'
import AdminPublicRoute from '../components/Admin/Routes/AdminPublicRoute'
import ReportedPost from '../pages/admin/ReportedPost'
import OneUser from '../pages/admin/OneUser'
import OnePostReport from '../pages/admin/OnePostReport'

function Admin() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminProtectRouter><AdminHome /></AdminProtectRouter>} />
        <Route path="/login" element={<AdminPublicRoute><Login /></AdminPublicRoute>} />
        <Route path="/showUsers" element={<AdminProtectRouter><ShowUsers /></AdminProtectRouter>} />
        <Route path="/showUsers" element={<AdminProtectRouter><ReportedPost /></AdminProtectRouter>} />
        <Route path="/OneUser" element={<AdminProtectRouter><OneUser /></AdminProtectRouter>} />
        <Route path="/OnePostReport" element={<AdminProtectRouter><OnePostReport /></AdminProtectRouter>} />
      </Routes>
    </>
  );
}

export default Admin;
