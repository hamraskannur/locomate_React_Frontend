import React from "react";
import ShowAllUser from "../../components/Admin/AllUser/ShowAllUser";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter";
import Report from "../../components/Admin/Report/Report";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";

function reportedPost() {
  return (
    <AdminProtectRouter>
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
    </AdminProtectRouter>
  );
}

export default reportedPost;
