import React from 'react';
import SideBar from '../../components/Admin/SideBar/SideBar';
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter"

function AdminHome() {
  return (
    <AdminProtectRouter>
    <div className="bg-[#F3F3F6]">
      <SideBar />
    </div>

    </AdminProtectRouter>
  );
}

export default AdminHome;
