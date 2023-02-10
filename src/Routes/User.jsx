import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/user/Home'
import Signup from '../pages/user/Signup';
import MyAccountPage from '../pages/user/MyAccount';
import MessagesPage from '../pages/user/Messages';
import Login from '../pages/user/Login';
import FriendsAccountPage from '../pages/user/FriendsAccount';
import FriendsPage from '../pages/user/Friends';
import EditProfilePage from '../pages/user/EditProfile';
import VerifyPage from '../pages/user/VerifyPage';
import UserProtectRouter from '../components/User/Routes/UserProtectRouter'
import PublicRoute from '../components/User/Routes/PublicRoute'
import Shorts from '../pages/user/Shorts'
import Settings from '../pages/user/Settings';
import Notification from '../pages/user/Notification'
import Search from '../pages/user/Search';
// import Page from '../pages/user/404page';

function User() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<UserProtectRouter> <Home /> </UserProtectRouter>} />
        <Route exact path="/signup" element={<PublicRoute> <Signup /></PublicRoute>} />
        <Route exact path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route exact path="/myAccount" element={<UserProtectRouter><MyAccountPage/> </UserProtectRouter>} />
        <Route exact path="/messages" element={<UserProtectRouter><MessagesPage /></UserProtectRouter>} />
        <Route exact path='/friendsAccount' element={<UserProtectRouter><FriendsAccountPage /> </UserProtectRouter>} />
        <Route exact path="/friends" element={<UserProtectRouter> <FriendsPage /> </UserProtectRouter>} />
        <Route exact path="/editProfile" element={<UserProtectRouter> <EditProfilePage /> </UserProtectRouter>} />
        <Route exact path="/verify" element={<PublicRoute><VerifyPage /></PublicRoute>} />
        <Route exact path='/shorts' element={<UserProtectRouter><Shorts /></UserProtectRouter>} />
        <Route exact path='/settings' element={<UserProtectRouter><Settings/> </UserProtectRouter>} />
        <Route exact path='/notifications' element={<UserProtectRouter><Notification/> </UserProtectRouter>} />
        <Route exact path='/search' element={<UserProtectRouter><Search/> </UserProtectRouter>} />
        {/* <Route path="/*" element={<Page />} /> */}
      </Routes>
    </>
  );
}

export default User;

