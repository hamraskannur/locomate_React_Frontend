import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { adminActions } from '../../../redux/adminAuth';

function AdminProtectRouter(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminActions.AddAdmin({ token: localStorage.getItem('adminToken') }));
  }, []);

  const admin = useSelector((state) => state?.admin?.adminToken);
  if (admin) {
    return props.children;
  }
  if (!localStorage.getItem("adminToken")) {

  return <Navigate to="/admin/login" />
  }
}

export default AdminProtectRouter;
