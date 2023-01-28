import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getMyProfile } from '../../../Api/userApi/profileApi';
import { userActions } from "../../../redux/userAuth"

function PublicRoute(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const routerFunction=async()=>{
      if (localStorage.getItem("token")) {
        let  userData = await getMyProfile();
        console.log(userData);
          dispatch(
            userActions.userAddDetails({
              token: localStorage.getItem("token"),
              user: userData[0],
            })
          );
        }
    }
    routerFunction()
  }, []);

  const user = useSelector((state) => state?.user?.userToken);
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
    return props.children;
}

export default PublicRoute;



