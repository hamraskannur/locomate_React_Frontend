/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { emailChangeHandler, passwordChangeHandler, showPassword } from './functions';
import { adminActions } from '../../../redux/adminAuth';
import { adminLogin } from '../../../Api/adminApi/adminAuthRequest';

function AdminLogin() {
  const router = useRouter()
  const dispatch = useDispatch();

  const [passwordShown, setPasswordShown] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [ErrMessage, setErrMessage] = useState('');

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => { setEmailIsValid(enteredEmail.includes('@') && enteredEmail.trim().length > 7); }, [enteredEmail]);
  useEffect(() => { setPasswordIsValid(enteredPassword.trim().length > 5); }, [enteredPassword]);
  useEffect(() => { setFormIsValid(passwordIsValid && emailIsValid); }, [passwordIsValid,
    emailIsValid]);

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await adminLogin({ email: enteredEmail, password: enteredPassword });
    if (response.Status) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('admin', true);
      dispatch(adminActions.AddAdmin({ token: response.token }));
      router.push('/admin');
    } else {
      setErrMessage(response.message);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-700  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Login
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input autoComplete="off" id="email" value={enteredEmail} onChange={(e) => { emailChangeHandler(e, setEnteredEmail); }} name="email" type="email" className={emailIsValid ? 'border-green-600 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600' : ' border-orange-300 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'} placeholder="Email address" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <div className="flex">
                    <input autoComplete="off" onChange={(e) => { passwordChangeHandler(e, setEnteredPassword); }} value={enteredPassword} id="password" name="password" type={passwordShown ? 'text' : 'password'} className={passwordIsValid ? 'border-green-600 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600' : ' border-orange-300 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'} placeholder="Password" />
                    <img onClick={() => { showPassword(passwordShown, setPasswordShown); }} src={passwordShown ? 'https://cdn-icons-png.flaticon.com/512/565/565655.png' : 'https://cdn-icons-png.flaticon.com/512/6684/6684701.png'} className={passwordShown ? 'w-8 h-8 p-1' : 'w-8 h-8'} alt="" />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Password
                    </label>
                  </div>
                </div>
                {ErrMessage && <small className="text-red-600">{ErrMessage}</small>}
                <div className="relative mt-8" />
                <div className="relative">

                  <button type="button" onClick={submitHandler} className={formIsValid ? 'bg-slate-500 text-white rounded-md px-2 py-1' : 'bg-slate-300 text-white rounded-md px-2 py-1 cursor-not-allowed'}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
