import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../page/UserPages/Home';
import LoginPage from '../page/UserPages/LoginPage';
import Signup from '../page/UserPages/SignupPage';
import VerifyPage from '../page/UserPages/VerifyPage';
import UserProtectRouter from '../components/User/Routes/UserProtectRouter';
import PublicRoute from '../components/User/Routes/PublicRoute';
import MyAccount from '../page/UserPages/MyAccount';
import EditProfilePage from '../page/UserPages/EditProfilePage'
import OnePostPage from '../page/UserPages/OnePostPage';
import FriendsAccount from '../page/UserPages/FriendsAccount';

function User() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<UserProtectRouter> <Home /> </UserProtectRouter>} />
        <Route exact path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route exact path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route exact path="/verify/:id/:token" element={<PublicRoute><VerifyPage /></PublicRoute>} />
        <Route exact path="/myAccount" element={<UserProtectRouter><MyAccount/> </UserProtectRouter>} />
        <Route exact path="/editProfile" element={<UserProtectRouter> <EditProfilePage/> </UserProtectRouter>} />
        <Route exact path='/onePost/:userId/:PostId' element={<UserProtectRouter><OnePostPage /> </UserProtectRouter>} />
        <Route exact path='/getAccount/:userId' element={<UserProtectRouter><FriendsAccount/> </UserProtectRouter>} />
      </Routes>
    </>
  );
}

export default User;
