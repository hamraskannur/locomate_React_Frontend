import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";

function Layout(props) {
  return (
    <div className="bg-[#F3F3F6]">
      <AdminNavBar />
      <div className="bg-[#F3F3F6] flex ">
        <div className="sticky">
          <SideBar />
        </div>
        {props.children}  
      </div>
    </div>
  );
}

export default Layout;
