import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getMyProfile } from "../../../Api/userApi/profileApi";
import { userActions } from "../../../redux/userAuth";

function PublicRoute(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const routerFunction = async () => {
      if (localStorage.getItem("token")) {
        try { 
          let userData = await getMyProfile();
          if (userData) {
            dispatch(
              userActions.userAddDetails({
                token: localStorage.getItem("token"),
                user: userData,
              })
            );
          } else{
            localStorage.clear();
            dispatch(userActions.userLogout());
            navigate("/login");
          }
        } catch (error) {
          navigate("*");
        }
      }
    };
    routerFunction();
  }, []);

  const user = useSelector((state) => state?.user?.userToken);
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  return props.children;
}

export default PublicRoute;
