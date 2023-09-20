import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminProtectRouter from '../components/Admin/Routes/AdminProtectRouter';
import AdminPublicRoute from '../components/Admin/Routes/AdminPublicRoute';
import ErrorPage from "../pages/admin/404page";

// Lazy-loaded components
const Dashboard = lazy(() => import('../pages/admin/DashboardPage'));
const ShowUsers = lazy(() => import('../pages/admin/ShowUsers'));
const Login = lazy(() => import('../pages/admin/Login'));
const ReportedPost = lazy(() => import('../pages/admin/ReportedPost'));
const OneUser = lazy(() => import('../pages/admin/OneUser'));
const OnePostReport = lazy(() => import('../pages/admin/OnePostReport'));
const Notifications = lazy(() => import('../pages/admin/Notifications'));
const AllPost = lazy(() => import('../pages/admin/AllPost'));

function Admin() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AdminProtectRouter><Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense></AdminProtectRouter>} />
        <Route path='/allUsers' element={<AdminProtectRouter><Suspense fallback={<div>Loading...</div>}><ShowUsers /></Suspense></AdminProtectRouter>} />
        <Route path='/login' element={<AdminPublicRoute><Suspense fallback={<div>Loading...</div>}><Login /></Suspense></AdminPublicRoute>} />
        <Route path='/reportedPost' element={<AdminProtectRouter><Suspense fallback={<div>Loading...</div>}><ReportedPost /></Suspense></AdminProtectRouter>} />
        <Route path='/oneUser' element={<AdminProtectRouter><Suspense fallback={<div>Loading...</div>}><OneUser /></Suspense></AdminProtectRouter>} />
        <Route path='/OnePostReport' element={<AdminProtectRouter><Suspense fallback={<div>Loading...</div>}><OnePostReport /></Suspense></AdminProtectRouter>} />
        <Route path='/userProfile' element={<AdminProtectRouter><Suspense fallback={<div>Loading...</div>}><OneUser /></Suspense></AdminProtectRouter>} />
        <Route path='/notifications' element={<AdminProtectRouter><Suspense fallback={<div>Loading...</div>}><Notifications /></Suspense></AdminProtectRouter>} />
        <Route path='/allPost' element={<AdminProtectRouter><Suspense fallback={<div>Loading...</div>}><AllPost /></Suspense></AdminProtectRouter>} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Admin;
