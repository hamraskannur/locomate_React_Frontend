import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { getMyProfile } from '../../../Api/userApi/profileApi';
import { userActions } from '../../../redux/userAuth';

function UserProtectRouter(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
   const routerFunction=async()=>{
      if (localStorage.getItem("token")) {
        let  userData = await getMyProfile();
        if(userData?.length >0){
          dispatch(
            userActions.userAddDetails({
              token: localStorage.getItem("token"),
              user: userData[0],
            })
          );
        }
        }
    }
    routerFunction()
  
  }, []);
  
  const user = useSelector((state) => state?.user?.userToken);
  if (user) {
    return props.children;
  }
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  
  
}

export default UserProtectRouter;
