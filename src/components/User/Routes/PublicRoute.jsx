import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userActions } from "../../../redux/userAuth"

function PublicRoute(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const publicFu = async () =>{
     await  dispatch(userActions.userAddDetails({ name: localStorage.getItem('userName'), token: localStorage.getItem('token') , Id: localStorage.getItem('UserId')  }));
    }
    publicFu()
  }, []);

  const user = useSelector((state) => state?.user?.userToken);
  if (user) {
    return <Navigate to="/" />;
  }else{
    return props.children;

  }
}

export default PublicRoute;



