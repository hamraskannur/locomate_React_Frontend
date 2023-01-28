import React from 'react'
import ProfilePage from '../ProfilePage/ProfilePage';
import { useSelector } from 'react-redux';

const MyAccount = () => {
   
   
    const user = useSelector((state) => state?.user?.user);

  return (
    <>
    { user && <ProfilePage userData={ user} type={true}/>}
    </>
  )
}

export default MyAccount
