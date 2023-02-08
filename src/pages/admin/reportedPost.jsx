import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import Report from "../../components/Admin/Report/Report";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";

function reportedPost() {
  return (
      <div className="bg-[#F3F3F6]">
        <AdminNavBar />
        <div className="bg-[#F3F3F6] flex  ">
        <div className="sticky">
          <SideBar />
          </div>
          <div className="w-full">
            <Report />
          </div>
        </div>
      </div>
  );
}

export default reportedPost;
