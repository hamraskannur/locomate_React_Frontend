import React,{useEffect} from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOneUser } from '../../../Api/adminApi/PostRequest'
import ProfilePage from '../ProfilePage/ProfilePage'

const OneUser = () => {
    const dispatch=useDispatch()
    const location = useLocation()
    const [userData,setUserData]=useState()
    const userId   = location.state.userId
    useEffect(()=>{
        const myProfile = async() =>{
          console.log(userId);
       if(userId){
        const newUserData = await getOneUser(userId)
          setUserData(newUserData)
        }
      }
      myProfile()
   },[userId])
  return (
    <>
     {userData && <ProfilePage userData={userData[0]}    />  }
    </>
  )
}

export default OneUser
