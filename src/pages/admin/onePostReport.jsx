import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter";
import ReportUsers from "../../components/Admin/ReportUsers/ReportUsers";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";

function onePostReport() {
  return (
    <AdminProtectRouter>
      <div className="bg-[#F3F3F6]">
        <AdminNavBar />
        <div className="bg-[#F3F3F6] flex ">
          <SideBar />
          <ReportUsers />
        </div>
      </div>
    </AdminProtectRouter>
  );
}

export default onePostReport;
