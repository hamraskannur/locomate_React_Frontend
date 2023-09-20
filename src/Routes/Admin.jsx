import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminProtectRouter from '../components/Admin/Routes/AdminProtectRouter';
import AdminPublicRoute from '../components/Admin/Routes/AdminPublicRoute';

const Dashboard = lazy(() => import('../pages/admin/DashboardPage'));
const ShowUsers = lazy(() => import('../pages/admin/ShowUsers'));
const Login = lazy(() => import('../pages/admin/Login'));
const ReportedPost = lazy(() => import('../pages/admin/ReportedPost'));
const OneUser = lazy(() => import('../pages/admin/OneUser'));
const OnePostReport = lazy(() => import('../pages/admin/OnePostReport'));
const Notifications = lazy(() => import('../pages/admin/Notifications'));
const AllPost = lazy(() => import('../pages/admin/AllPost'));
const ErrorPage = lazy(() => import('../pages/admin/404page'));

function Admin() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AdminProtectRouter><Dashboard /></AdminProtectRouter>} />
        <Route path="/allUsers" element={<AdminProtectRouter><ShowUsers /></AdminProtectRouter>} />
        <Route path="/login" element={<AdminPublicRoute><Login /></AdminPublicRoute>} />
        <Route path="/reportedPost" element={<AdminProtectRouter><ReportedPost /></AdminProtectRouter>} />
        <Route path="/oneUser" element={<AdminProtectRouter><OneUser /></AdminProtectRouter>} />
        <Route path="/OnePostReport" element={<AdminProtectRouter><OnePostReport /></AdminProtectRouter>} />
        <Route path="/userProfile" element={<AdminProtectRouter><OneUser /></AdminProtectRouter>} />
        <Route path="/notifications" element={<AdminProtectRouter><Notifications /></AdminProtectRouter>} />
        <Route path="/allPost" element={<AdminProtectRouter><AllPost /></AdminProtectRouter>} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default Admin;
