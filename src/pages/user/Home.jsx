import React from "react";
import NavBar from "../../components/User/NavBar/NavBar";
import Post from "../../components/User/Posts/Post";
import Suggestions from "../../components/User/Suggestions/Suggestions";
import UserSideBar from "../../components/User/UserSideBar/UserSideBar";
import BottomBar from "../../components/User/BottomBar/BottomBar";

function Home() {

  return (
         
          <div className="bg-[#F3F3F6]">
            <NavBar />
            <div className="flex ">
              <UserSideBar />
              <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
                <Post />
              </div>
              <div className="  max-sm:hidden max-md:hidden max-lg:hidden">
                <Suggestions />
              </div>
            </div>
            <div className="md:hidden block sticky bottom-0 z-50 w-full ">
              <BottomBar />
            </div>
          </div>
      
  );
}

export default Home;
