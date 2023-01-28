import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userActions } from '../../../redux/userAuth';

function UserProtectRouter(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.userAddDetails({ name: localStorage.getItem('userName'), token: localStorage.getItem('token') , Id: localStorage.getItem('UserId')}));
  }, []);

  const user = useSelector((state) => state?.user?.userToken);
  if (user) {
    return props.children;
  }
  return <Navigate to="/login" />;
}

export default UserProtectRouter;
