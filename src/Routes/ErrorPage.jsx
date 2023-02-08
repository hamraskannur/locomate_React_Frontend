import { Route, Routes } from 'react-router-dom';
import React from 'react';
import AdminErrPage from '../pages/admin/404page'
import UserErrPage from '../pages/user/404page'


function User() {
  return (
    <>

      <Routes>
        <Route  path="/admin/*" element={ <AdminErrPage/> } />
        <Route  path="/*" element={ <UserErrPage /> } />
      </Routes>
    </>
  );
}

export default User;

