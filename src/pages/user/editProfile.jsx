import React from "react";
import NavBar from "../../components/User/NavBar/NavBar";
import UserSideBar from "../../components/User/UserSideBar/UserSideBar";
import EditProfile from "../../components/User/EditProfile/EditProfile";
import UserProtectRouter from "../../components/User/Routes/UserProtectRouter";
import BottomBar from "../../components/User/BottomBar/BottomBar";

const EditProfilePage = () => {
  return (
    <UserProtectRouter>  
      <div className="bg-[#F3F3F6]">
        <NavBar />
        <div className="flex ">
          <UserSideBar />
          <div className="justify-center items-center  max-sm:w-full max-md:w-full max-lg:w-full">
            <EditProfile />
          </div>
        </div>
        <div className="md:hidden block sticky bottom-0 z-50 w-full ">
           <BottomBar/>
        </div>
      </div>
    </UserProtectRouter>
  );
};

export default EditProfilePage;
