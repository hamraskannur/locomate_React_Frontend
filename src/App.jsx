import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import Spinner from "./components/User/Spinner/Spinner";
import ToastContainer from "./components/Toast/ToastContainer";
const User = lazy(() => import("./Routes/User"));
const Admin = lazy(() => import("./Routes/Admin"));

function App() {
  const { loading } = useSelector((state) => state.loader);
  return (
    <div>
      <Router>
        {loading && (
          <div className="h-screen">
            <Spinner />
          </div>
        )}
        <>
          <ToastContainer />
          <Suspense fallback={<div className='h-screen'><Spinner /></div>}>
            <Routes>
              <Route path="/*" element={<User />} />
              <Route path="/admin/*" element={<Admin />} />
            </Routes>
          </Suspense>
        </>
      </Router>
    </div>
  );
}

export default App;
