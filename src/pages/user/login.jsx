import React from "react";
import LoginPage from "../../components/User/Login/Login";

import PublicRoute from "../../components/User/Routes/PublicRoute";

const Login = () => {
  
  return (
    <>
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    </>
  );
};

export default Login;
