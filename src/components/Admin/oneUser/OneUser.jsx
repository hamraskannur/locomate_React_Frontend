import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getOneUser } from "../../../Api/adminApi/PostRequest";
import ProfilePage from "../ProfilePage/ProfilePage";

const OneUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [userData, setUserData] = useState();
  const userId = location.state.userId;
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (userId) {
        const newUserData = await getOneUser(userId);
        setUserData(newUserData);
      }
    })();
  }, [userId]);
  return <>{userData && <ProfilePage userData={userData[0]} />}</>;
};

export default OneUser;
