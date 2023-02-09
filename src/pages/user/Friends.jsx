import React from "react";
import NavBar from "../../components/User/NavBar/NavBar";
import UserSideBar from "../../components/User/UserSideBar/UserSideBar";
import Request from "../../components/User/request/Request";
import BottomBar from "../../components/User/BottomBar/BottomBar";

const FriendsPage = () => {
  return(
      <div className="bg-[#F3F3F6]">
        <NavBar />
        <div className="flex ">
          <UserSideBar />
          <div className="justify-center items-center  w-full">
            <Request/>
          </div>
        </div>
        <div className="md:hidden block sticky bottom-0 z-50 w-full ">
           <BottomBar/>
        </div>
      </div>
   )
};

export default FriendsPage;
