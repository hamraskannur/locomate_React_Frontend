import { useRouter } from "next/router";
import React from "react";
import PublicRoute from "../../components/User/Routes/PublicRoute";
import SignupPage from "../../components/User/Signup/Signup";

const Signup = () => {

  return (
    <>
      <PublicRoute>
        
            
           <SignupPage />
      </PublicRoute>
    </>
  );
};

export default Signup;
