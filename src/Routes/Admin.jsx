import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLoginPage from '../page/adminPages/AdminLoginPage';
import AdminHome from '../page/adminPages/AdminHome';
import AllUser from '../page/adminPages/AllUser';
import AdminPublicRoute from '../components/Admin/Routes/AdminPublicRoute';
import AdminProtectRouter from '../components/Admin/Routes/AdminProtectRouter';

function Admin() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminProtectRouter><AdminHome /></AdminProtectRouter>} />
      </Routes>
      <Routes>
        <Route path="/login" element={<AdminPublicRoute><AdminLoginPage /></AdminPublicRoute>} />
      </Routes>
      <Routes>
        <Route path="/showUsers" element={<AdminProtectRouter><AllUser /></AdminProtectRouter>} />
      </Routes>
    </>
  );
}

export default Admin;
