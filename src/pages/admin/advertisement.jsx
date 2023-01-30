import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter";
import ShowAdvertisement from "../../components/Admin/advertisement/ShowAdvertisement";
import AdminNavBar from '../../components/Admin/NavBar/AdminNavBar'

function advertisement() {
  return (
    <AdminProtectRouter>
      <div className="bg-[#F3F3F6]">
        <AdminNavBar />
        <div className="flex bg-[#F3F3F6]">
          <SideBar />
          <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
            <ShowAdvertisement />
          </div>
        </div>
      </div>
    </AdminProtectRouter>
  );
}

export default advertisement;
