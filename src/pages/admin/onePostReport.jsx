import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter"
import ReportUsers from "../../components/Admin/ReportUsers/ReportUsers";

function onePostReport() {
  return (
    <AdminProtectRouter>
      <div className="bg-[#F3F3F6] flex ">
        <SideBar />
         <ReportUsers/>
      </div>
    </AdminProtectRouter>
  );
}

export default onePostReport;
