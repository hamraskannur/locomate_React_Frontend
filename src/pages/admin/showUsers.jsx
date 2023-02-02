import React from "react";
import ShowAllUser from "../../components/Admin/AllUser/ShowAllUser";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";

function showUsers() {
  return (
    <AdminProtectRouter>
      <div className="bg-[#F3F3F6]">
        <AdminNavBar />
        <div className="bg-[#F3F3F6] flex ">
        <div className="sticky">
          <SideBar />
          </div>
          
          <ShowAllUser />

        </div>
      </div>
    </AdminProtectRouter>
  );
}

export default showUsers;
