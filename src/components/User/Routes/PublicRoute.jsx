import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from "../../../redux/userAuth"
import { useRouter } from "next/router";
import { getMyProfile } from '../../../Api/userApi/profileApi';


 const  PublicRoute = ({ children}) => {
   let token 
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const publicFu = async () =>{
      if (token || localStorage.getItem("token") && localStorage.getItem("user")) {
      let  userData = await getMyProfile();
        dispatch(
          userActions.userAddDetails({
            token: localStorage.getItem("token"),
            user: userData[0],
          })
        );
      }
    }
    publicFu()
    if (localStorage.getItem("user")) {
         router.push('/');
     }
    }, [token]);
    token = useSelector((state) => state?.user?.userToken);
    if(!token){
      return children;
    }
  
}
  
export default PublicRoute;


