import React from "react";
import ShowAllUser from "../../components/Admin/AllUser/ShowAllUser";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter"

function showUsers() {
  return (
    <AdminProtectRouter>
      <div className="bg-[#F3F3F6] flex ">
        <SideBar />
        <ShowAllUser />
      </div>
    </AdminProtectRouter>
  );
}

export default showUsers;
