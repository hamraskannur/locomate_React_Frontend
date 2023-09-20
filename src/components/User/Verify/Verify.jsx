import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { verifySignUp } from '../../../Api/userApi/userAuthRequest';
import { hideLoading, showLoading } from "../../../redux/loadingBar";  
import { successToast } from '../../Toast/Toast';

function Verify() {
  const navigate = useNavigate()  
  const [searchParams]=useSearchParams()
  const dispatch = useDispatch();
  const userId=searchParams.get('id')
  const token=searchParams.get('token')

    const [ErrMessage, setErrMessage] = useState('');
  const submitVerify = async (event) => {
 
    event.preventDefault();
    dispatch(showLoading());
    try{
      const verify = await verifySignUp(userId,token);
      dispatch(hideLoading());
      if (verify.Status) {
        navigate('/login');
        successToast('susses fully verifyed')
      } else {
        setErrMessage(verify.message);
      }
    }catch(error){
      navigate('*');
    }
  };
  return (
      <div className="flex items-center justify-center min-h-screen p-5 bg-white min-w-screen">
        <div className="max-w-xl p-8 text-center text-gray-800 bg-slate-50 shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
          <h3 className="text-2xl">Thanks for signing up for Website name!</h3>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
          </div>

          <p>We're happy You're here. Let's get your email address verified</p>
          <div className="mt-4">
            <button onClick={submitVerify} type="button" className="px-2 py-2 text-white bg-slate-700 rounded">Click to Verify Email</button>
          </div>
          {ErrMessage && <small className="text-red-600">{ErrMessage}</small>}
        </div>
      </div>
  );
}

export default Verify;
