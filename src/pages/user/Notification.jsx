import React from "react";
import NavBar from "../../components/User/NavBar/NavBar";
import Suggestion from "../../components/User/Suggestion/Suggestion";
import UserSideBar from "../../components/User/UserSideBar/UserSideBar";
import UserProtectRouter from "../../components/User/Routes/UserProtectRouter";
import BottomBar from "../../components/User/BottomBar/BottomBar";
import Notification from "../../components/User/Notification/Notification";

function Home() {

  return (
    <UserProtectRouter>
         
          <div className="bg-[#F3F3F6]">
            <NavBar />
            <div className="flex ">
              <UserSideBar />
              <div className="w-6/12 max-sm:w-full max-md:w-full max-lg:w-full">
                <Notification/>
              </div>
              <div className=" p-10 max-sm:hidden max-md:hidden max-lg:hidden">
                <Suggestion />
              </div>
            </div>
            <div className="md:hidden block sticky bottom-0 z-50 w-full ">
              <BottomBar />
            </div>
          </div>
      
    </UserProtectRouter>
  );
}

export default Home;
