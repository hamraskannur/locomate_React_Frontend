import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Spinner from "../components/User/Spinner/Spinner";
import UserProtectRouter from '../components/User/Routes/UserProtectRouter';
import PublicRoute from '../components/User/Routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from '../Api/userApi/profileApi';
import { userActions } from '../redux/userAuth';
import { useEffect } from 'react';
import Page from '../pages/admin/404page';
import Internalserver from '../pages/user/500page';

const Home = lazy(() => import('../pages/user/Home'));
const Signup = lazy(() => import('../pages/user/Signup'));
const MyAccountPage = lazy(() => import('../pages/user/MyAccount'));
const MessagesPage = lazy(() => import('../pages/user/Messages'));
const Login = lazy(() => import('../pages/user/Login'));
const FriendsAccountPage = lazy(() => import('../pages/user/FriendsAccount'));
const FriendsPage = lazy(() => import('../pages/user/Friends'));
const EditProfilePage = lazy(() => import('../pages/user/EditProfile'));
const VerifyPage = lazy(() => import('../pages/user/VerifyPage'));
const Shorts = lazy(() => import('../pages/user/Shorts'));
const Settings = lazy(() => import('../pages/user/Settings'));
const Notification = lazy(() => import('../pages/user/Notification'));
const Search = lazy(() => import('../pages/user/Search'));

function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.userToken);

  useEffect(() => {
    (async()=>{
      if (localStorage.getItem("token") ) {
        let userData = await getMyProfile();
        if (userData) {
          dispatch(
            userActions.userAddDetails({
              token: localStorage.getItem("token"),
              user: userData,
            })
          );
        }
      }
    })()
  }, []);

  return (
    <>
      <Suspense fallback={<div className='h-screen'><Spinner /></div>}>
        <Routes>
          <Route exact path="/" element={<UserProtectRouter> <Home /> </UserProtectRouter>} />
          <Route exact path="/signup" element={<PublicRoute> <Signup /></PublicRoute>} />
          <Route exact path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route exact path="/verify" element={<PublicRoute><VerifyPage /></PublicRoute>} />
          <Route exact path='/search' element={<UserProtectRouter><Search/> </UserProtectRouter>} />
          <Route exact path="/messages" element={<UserProtectRouter><MessagesPage /></UserProtectRouter>} />
          <Route exact path='/shorts' element={<UserProtectRouter><Shorts /></UserProtectRouter>} />
          <Route exact path='/settings' element={<UserProtectRouter><Settings/> </UserProtectRouter>} />
          <Route exact path="/friends" element={<UserProtectRouter> <FriendsPage /> </UserProtectRouter>} />
          <Route exact path='/notifications' element={<UserProtectRouter><Notification/> </UserProtectRouter>} />
          <Route exact path="/editProfile" element={<UserProtectRouter> <EditProfilePage /> </UserProtectRouter>} />

          <Route exact path='/friendsAccount' element={<UserProtectRouter><FriendsAccountPage /> </UserProtectRouter>} />
          <Route exact path="/myAccount" element={<UserProtectRouter><MyAccountPage/> </UserProtectRouter>} />
          <Route path="/500page" element={<Internalserver />} />
          <Route path="/*" element={<Page />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default User;
