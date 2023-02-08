import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import ReportUsers from "../../components/Admin/ReportUsers/ReportUsers";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";

function onePostReport() {
  return (
      <div className="bg-[#F3F3F6]">
        <AdminNavBar />
        <div className="bg-[#F3F3F6] flex ">
        <div className="sticky">
          <SideBar />
          </div>
          <div className="w-full ">
          <ReportUsers />
          </div>
        </div>
      </div>
  );
}

export default onePostReport;
