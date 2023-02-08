import React,{useState ,useEffect } from 'react'
import ProfilePage from "../ProfilePage/ProfilePage";
import { getFriendsAccount } from '../../../Api/userApi/postRequest';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from "../../../redux/loadingBar";  

const FriendsAccount = () => {
  const location = useLocation()
  const dispatch = useDispatch();
  const navigate=useNavigate()
    const { userId,admin }  = location.state

    const [userData, setUserData] = useState([])
    
    useEffect(()=>{
      dispatch(showLoading());
      const myProfile = async() =>{
        if(userId){
          try{

            const newUserData = await getFriendsAccount(userId)
            setUserData(newUserData)
          }catch(error){
            navigate('*');
          }
        }
      }
      myProfile()
      dispatch(hideLoading());
 },[userId])

  return (
    <>
    <div>
   {userData[0] && <ProfilePage userData={userData[0]} type={false} admin={admin}  />}
    </div>
    </>
  )
}

export default FriendsAccount
