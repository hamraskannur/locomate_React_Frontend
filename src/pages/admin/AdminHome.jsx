import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter";
import AdminNavBar from '../../components/Admin/NavBar/AdminNavBar'

function AdminHome() {
  return (
    <AdminProtectRouter>
      <div className="bg-[#F3F3F6]">
        <AdminNavBar/>
        <div className="bg-[#F3F3F6]">
          <SideBar />
        </div>
      </div>
    </AdminProtectRouter>
  );
}

export default AdminHome;
