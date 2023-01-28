import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import FriendsAccount from "../../components/User/ProfilePage/FriendsAccount";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter"

function AllUser() {
  return (
    <AdminProtectRouter>

    <div className="flex bg-[#F3F3F6]">
      <SideBar />
      <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
        <FriendsAccount />
      </div>
    </div>
    </AdminProtectRouter>
  );
}

export default AllUser;
