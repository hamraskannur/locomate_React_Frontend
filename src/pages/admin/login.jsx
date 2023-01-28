import React from 'react';
import AdminLogin from '../../components/Admin/AdminLogin/AdminLogin';
import AdminPublicRoute from "../../components/Admin/Routes/AdminPublicRoute"

function AdminLoginPage() {
  return (
    <AdminPublicRoute>

    <div className="bg-[#F3F3F6]">
      <AdminLogin />
    </div>
    </AdminPublicRoute>
  );
}

export default AdminLoginPage;
