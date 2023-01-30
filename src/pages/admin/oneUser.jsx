import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter";
import OneUser from "../../components/Admin/oneUser/OneUser";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";

function AllUser() {
  return (
    <AdminProtectRouter>
      <div className="bg-[#F3F3F6]">
        <AdminNavBar />
        <div className="flex bg-[#F3F3F6]">
          <SideBar />
          <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
            <OneUser />
          </div>
        </div>
      </div>
    </AdminProtectRouter>
  );
}

export default AllUser;
