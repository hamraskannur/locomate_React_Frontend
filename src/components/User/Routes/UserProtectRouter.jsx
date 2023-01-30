import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getMyProfile } from '../../../Api/userApi/profileApi';
import { userActions } from '../../../redux/userAuth';

function UserProtectRouter(props) {
  const dispatch = useDispatch();

  useEffect(() => {
   const routerFunction=async()=>{
      if (localStorage.getItem("token")) {
        let  userData = await getMyProfile();
       
          dispatch(
            userActions.userAddDetails({
              token: localStorage.getItem("token"),
              user: userData[0],
            })
          );
        }
    }
    routerFunction()
    if(!localStorage.getItem("token")){
    }
  }, []);
  
  const user = useSelector((state) => state?.user?.userToken);
  if (user) {
    return props.children;
  }else{
    
    return <Navigate to="/login" />;
  }
  
}

export default UserProtectRouter;
