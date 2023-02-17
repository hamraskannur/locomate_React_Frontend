import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminProtectRouter from "../../components/Admin/Routes/AdminProtectRouter";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";
import PostDetailChart from "../../components/Admin/PostDetailChart/PostDetailChart";
import UserDetailChart from "../../components/Admin/UserDetailChart/UserDetailChart";

function DashboardPage() {
  return (
    <AdminProtectRouter>
      <div className="bg-[#F3F3F6]">
        <AdminNavBar />
        <div className="flex ">
          <div className="sticky ">
            <SideBar />
          </div>
          <div className="w-full max-sm:w-full max-md:w-full max-lg:w-full scroll">
            <UserDetailChart />
              <PostDetailChart />            
          </div>
        </div>
      </div>
    </AdminProtectRouter>
  );
}

export default DashboardPage;
