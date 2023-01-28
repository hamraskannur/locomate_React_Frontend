import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getFollowingUser,
  getFollowersUser,
} from "../../../Api/userApi/followRequest";

const  ShowUser = ({ type, userId ,admin}) => {
  const user = useSelector((state) => state?.user?.user?._id);

  const router = useRouter();  
  const [users, setUsers] = useState();
  useEffect(() => {
    const getUserData = async (type) => {
      if (type === "Following") {
        const user = await getFollowingUser(userId);
        setUsers(user);
      }
      if (type === "Followers") {
        const user = await getFollowersUser(userId);
        setUsers(user);
      }
    };
    getUserData(type);
  }, [type, userId]);


  const goToAccountPage=(userId)=>{
   if(admin){
    router.push(
      {
        pathname: "/admin/oneUser",
        query: {
          userId: userId,
          admin:true
        },
      },
      "/admin/getviewUser"
    )
   }else{
     if (user === userId) {
       router.push("/user/myAccount");
     } else {
       router.push(`/user/getAccount/${userId}`);
     }
   }

  }
  return (
    <div>
      <div>
        <div>
          <h2 className="font-bold text-xl mb-4">{type}</h2>
        </div>
        {users?.map((user) => (
          <div>
            <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 hover:bg-snow-drift-100">
              <div className="flex gap-3">
                <div onClick={()=>goToAccountPage(user?.result?._id)} className="flex gap-3 cursor-pointer">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm shadow-gray-500">
                    <img src={user?.result?.ProfileImg} alt="avatars" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      {user?.result?.username}
                    </h3>
                    <h4 className="text-sm leading-3">{user?.result?.name}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowUser;
