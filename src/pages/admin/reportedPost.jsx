import React from "react";
import ShowAllUser from "../../components/Admin/AllUser/ShowAllUser";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter"
import Report from "../../components/Admin/Report/Report";

function reportedPost() {
  return (
    <AdminProtectRouter>
      <div className="bg-[#F3F3F6] flex ">
        <SideBar />
        <Report/>
      </div>
    </AdminProtectRouter>
  );
}

export default reportedPost;
