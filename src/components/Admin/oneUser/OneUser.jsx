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
    const myProfile = async () => {
      console.log(userId);
      if (userId) {
        try {
          const newUserData = await getOneUser(userId);
          setUserData(newUserData);
        } catch (error) {
          navigate("/admin/*");
        }
      }
    };
    myProfile();
  }, [userId]);
  return <>{userData && <ProfilePage userData={userData[0]} />}</>;
};

export default OneUser;
