import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getFollowingUser,
  getFollowersUser,
} from "../../../Api/userApi/followRequest";
import Avatars from "../avatar/Avatar";

const ShowUser = ({ type, userId }) => {
  const user = useSelector((state) => state?.user?.user?._id);

  const navigate = useNavigate();
  const [users, setUsers] = useState();
  useEffect(() => {
    (async () => {
      if (type === "Following") {
        const user = await getFollowingUser(userId);
        setUsers(user);
      }
      if (type === "Followers") {
        const user = await getFollowersUser(userId);
        setUsers(user);
      }
    })();
  }, [type, userId]);

  const goToAccountPage = (userId) => {
    console.log(userId + " === " + user);
    if (userId === user) {
      navigate("/myAccount");
    } else {
      navigate("/friendsAccount", { state: { userId: userId } });
    }
  };
  return (
    <div>
      <div>
        <div>
          <h2 className="font-bold text-xl mb-4">{type}</h2>
        </div>
        {users?.map((user) => (
          <div key={user?.result?._id}>
            <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 hover:bg-snow-drift-100">
              <div className="flex gap-3">
                <div
                  onClick={() => goToAccountPage(user?.result?._id)}
                  className="flex gap-3 cursor-pointer"
                >
                  <Avatars img={user?.result?.ProfileImg} />
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
