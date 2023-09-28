import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFriendsAccount } from "../../../Api/userApi/postRequest";
import Avatars from "../avatar/Avatar";

const AllUser = ({ data, currentUserId, onlineUsers ,searchUser}) => {
  const [userData, setUserData] = useState(null);
  const [notAllowed, setNotAllowed] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    
    const userId = data.members.find((id) => id != currentUserId);
    const getUserData = async () => {
      const data = await getFriendsAccount(userId);
      setUserData(data[0]);
    };
    getUserData();
  }, []);


  useEffect(()=>{
    if(searchUser){
      setNotAllowed(userData.username.toLowerCase().includes(searchUser.toLowerCase())) 
    }
  },[searchUser])
  return (
    <>
    {notAllowed && <>
      <div className=" flex flex-row py-4 px-2 h-full w2/6 justify-center items-center border-b-2 hover:bg-[#bbc0c7]">
        <div className="">
            <Avatars img={userData?.ProfileImg} />
        </div>
        <div className="w-full ml-5">
          <div className="text-lg font-semibold">{userData?.username}</div>
          {onlineUsers.map(
            (item) =>
              item.userId === userData?._id && (
                <span className="text-gray-500">
                  {onlineUsers.length > 1 ? "online" : ""}
                </span>
              )
          )}
        </div>
      </div>
      <hr />
    </>}
    </>
  );
};

export default AllUser;
