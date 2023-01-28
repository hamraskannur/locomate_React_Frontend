/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import { userActions } from "../../../redux/userAuth";
import {
  emailChangeHandler,
  passwordChangeHandler,
  showPassword,
  submitHandler
} from "./functions";

function Login() {

  const router = useRouter();
  const [ErrMessage, setErrMessage] = useState("");
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [response, setResponse] = useState([]);

  const loginHandler = async (event) => {
    event.preventDefault();
    console.log("req,va");
    await submitHandler(
      
      enteredEmail,
      enteredPassword,
      setErrMessage,
      setResponse
    );
    if (response?.Status) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", true);


      dispatch(
        userActions.userAddDetails({
        user: response.user,
        token: response.token,
        })
      );
      router.push("/");
    } else {
      setErrMessage(response.message);
    }
  
  };
  const handleGoogleLogin = async () => {
    signIn("google", { callbackUrl: "http://localhost:3000/user/loginWait" });
    
  };
  const handleGithubLogin = async () => {
    signIn("github", { callbackUrl: "http://localhost:3000/user/loginWait" });

  }
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-700  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="pt-8 pb-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    value={enteredEmail}
                    onChange={(e) => {
                      emailChangeHandler(e, setEnteredEmail);
                    }}
                    name="email"
                    type="text"
                    className="border-gray-700  peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    autoComplete="off"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative ">
                  <div className="flex">
                    <input
                      autoComplete="off"
                      onChange={(e) => {
                        passwordChangeHandler(e, setEnteredPassword);
                      }}
                      value={enteredPassword}
                      id="password"
                      name="password"
                      type={passwordShown ? "text" : "password"}
                      className="border-gray-700  peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <img
                      role="presentation"
                      onClick={() => {
                        showPassword(passwordShown, setPasswordShown);
                      }}
                      src={
                        passwordShown
                          ? "https://cdn-icons-png.flaticon.com/512/565/565655.png"
                          : "https://cdn-icons-png.flaticon.com/512/6684/6684701.png"
                      }
                      className={
                        passwordShown
                          ? "w-8 h-8 p-1 cursor-pointer"
                          : "w-8 h-8 cursor-pointer"
                      }
                      alt=""
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                </div>
                {ErrMessage && 
                  <small className=" text-red-600">{ErrMessage}</small>
                }
                <div className="relative ">
                  <button
                    type="button"
                    className=" text-sm text-slate-900 cursor-pointer"
                    onClick={() => {
                      router.push("/user/signup");
                    }}
                  >
                    Don't have an account? Sign up
                  </button>
                </div>
                <div className="relative ">
                  <button
                  onClick={loginHandler} 
                    type="button"
                    className="bg-slate-500 text-white rounded-md px-2 py-1"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="flex mb-4 items-center justify-center border-none">
                <h1>or continue with</h1>
              </div>
            </div>
          </div>
              <div className=" border-none sm:flex	 md:flex	 lg:flex	2xl:flex xl:flex">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className=" group h-12 px-14 border-2 border-gray-300 rounded-full transition duration-300 
                        hover:border-slate-700 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      className="absolute left-0 w-5"
                      alt="google logo"
                    />
                    <span className="pl-4 block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-slate-700 sm:text-base">
                      Google
                    </span>
                  </div>
                </button>
                <button onClick={handleGithubLogin}
                  className=" mt-5 sm:mt-0	 md:mt-0	ml-8 lg:mt-0	2xl:mt-0 xl:mt-0	  group h-12 px-14 border-2 border-gray-300 rounded-full transition duration-300 
                                  hover:border-slate-700 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className=" relative flex items-center space-x-4 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute left-0 w-5 text-gray-700"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span className="pl-4 block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-slate-700 sm:text-base">
                      Github
                    </span>
                  </div>
                </button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
