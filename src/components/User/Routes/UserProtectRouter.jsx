import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getMyProfile } from "../../../Api/userApi/profileApi";
import { userActions } from "../../../redux/userAuth";

function UserProtectRouter(props) {
  const user = useSelector((state) => state?.user?.userToken);

  if (localStorage.getItem("token")) {
    return props.children;
  }
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
}

export default UserProtectRouter;
