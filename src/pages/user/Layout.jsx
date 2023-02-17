import React from "react";
import NavBar from "../../components/User/NavBar/NavBar";
import UserSideBar from "../../components/User/UserSideBar/UserSideBar";
import BottomBar from "../../components/User/BottomBar/BottomBar";

function Layout(props) {
  return (
    <div className="bg-[#F3F3F6]">
      <NavBar />
      <div className="flex ">
        <UserSideBar />
        {props.children}
      </div>
      <div className="md:hidden block sticky bottom-0 z-50 w-full ">
        <BottomBar />
      </div>
    </div>
  );
}

export default Layout;
