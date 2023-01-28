import React,{useState ,useEffect } from 'react'
import { useRouter } from "next/router"; 
import ProfilePage from "../ProfilePage/ProfilePage";
import { getFriendsAccount } from '../../../Api/userApi/postRequest';
import { startLoading,completedLoading } from '../../../redux/topLoadingBar'
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar'

const FriendsAccount = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { progress } = useSelector((state) => state.loader);

    const { userId,admin }  = router.query
    console.log(userId);
    const [userData, setUserData] = useState([])
    
    useEffect(()=>{
      dispatch(startLoading())
      const myProfile = async() =>{
     if(userId){
      const newUserData = await getFriendsAccount(userId)
        setUserData(newUserData)
      }
    }
    myProfile()
    dispatch(completedLoading())
 },[userId])

  return (
    <>
    {progress===100 ?<div>
   {userData[0] && <ProfilePage userData={userData[0]} type={false} admin={admin}  />}
    </div>:<LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        loaderSpeed={1000}
      />}
    </>
  )
}

export default FriendsAccount
