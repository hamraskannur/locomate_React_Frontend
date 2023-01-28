import React, { useEffect , useState} from 'react'
import NavBar from '../../components/User/NavBar/NavBar';
import ProfilePage from '../../components/User/ProfilePage/ProfilePage';
import UserSideBar from '../../components/User/UserSideBar/UserSideBar';
import Suggestion from '../../components/User/Suggestion/Suggestion';
import { getMyProfile } from '../../Api/userApi/userApi';

const MyAccount = () => {
  const [userData, setUserData] = useState()
  let newUserData;
  useEffect(()=>{
   const myProfile = async() =>{
    newUserData = await getMyProfile()
    setUserData(newUserData)
   }
   myProfile()
  },[])

  return (
    <div className='bg-[#F3F3F6]'>
    <NavBar />
    <div className="flex ">
      <UserSideBar/>
      <div className='w-6/12 max-sm:w-full max-md:w-full max-lg:w-full'>
      { userData && <ProfilePage userData={ userData } type={true}/>}
        </div>
        <div className=' max-sm:hidden max-md:hidden max-lg:hidden'>
        <Suggestion />
        </div>
    </div>
  </div>    
  )
}

export default MyAccount
