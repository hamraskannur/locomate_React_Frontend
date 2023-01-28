import { useSelector } from 'react-redux';
import React from 'react';
import { Navigate } from 'react-router-dom';

function AdminPublicRoute(props) {
  const admin = useSelector((state) => state?.admin?.adminToken);
  if (admin) {
    return <Navigate to="/admin" />;
  }
  return props.children;
}

export default AdminPublicRoute;



