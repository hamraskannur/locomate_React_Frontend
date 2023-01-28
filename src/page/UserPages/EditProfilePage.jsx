import React from 'react'
import NavBar from '../../components/User/NavBar/NavBar';
import UserSideBar from '../../components/User/UserSideBar/UserSideBar';
import Suggestion from '../../components/User/Suggestion/Suggestion';
import EditProfile from '../../components/User/EditProfile/EditProfile';


const MyAccount = () => {

  return (
    <div className='bg-[#F3F3F6]'>
    <NavBar />
    <div className="flex ">
      <UserSideBar/>
      <div className='justify-center items-center w-6/12 max-sm:w-full max-md:w-full max-lg:w-full'>
        <EditProfile/>
        </div>
       
    </div>
  </div>    
  )
}

export default MyAccount
