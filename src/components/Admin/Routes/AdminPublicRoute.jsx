import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from "../../../redux/userAuth"
import { useRouter } from "next/router";


 const  PublicRoute = ({ children}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const publicFu =  () =>{
       dispatch(userActions.userAddDetails({  token: localStorage.getItem('token')  }));
    }
    publicFu()
  }, []);
  const user = useSelector((state) => state?.user?.userToken);
  if (user && localStorage.getItem("admin")) {
       router.push('/admin');
   }else{
    return children;
  }
}

export default PublicRoute;


