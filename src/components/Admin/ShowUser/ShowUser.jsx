import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFollowersUser, getFollowingUser } from "../../../Api/adminApi/PostRequest";

const  ShowUser = ({ type, userId }) => {
  const user = useSelector((state) => state?.user?.user?._id);

  const navigate = useNavigate()
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
 
    navigate('/admin/oneUser', { state: { userId: userId } })


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
