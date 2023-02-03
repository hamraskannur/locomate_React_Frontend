import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter";
import Notifications from "../../components/Admin/Notifications/Notifications";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";

function Notification() {
  return (
    <AdminProtectRouter>
      <div className="bg-[#F3F3F6]">
        <AdminNavBar />
        <div className="flex ">
          <div className="sticky ">
          <SideBar />
          </div>
          <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full scroll">
            <Notifications />
          </div>
        </div>
      </div>
    </AdminProtectRouter>
  );
}

export default Notification;
