import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import OneUser from "../../components/Admin/oneUser/OneUser";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";

function AllUser() {
  return (
      <div className="bg-[#F3F3F6]">
        <AdminNavBar />
        <div className="flex ">
          <div className="sticky ">
          <SideBar />
          </div>
          <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full scroll">
            <OneUser />
          </div>
        </div>
      </div>
  );
}

export default AllUser;
