import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../redux/userAuth";
import { useNavigate } from "react-router-dom";
import {
  emailChangeHandler,
  passwordChangeHandler,
  showPassword,
} from "./functions";
import { login } from "../../../Api/userApi/userAuthRequest";

import { hideLoading, showLoading } from "../../../redux/loadingBar";
import { errorToast, successToast } from "../../Toast/Toast";

function Login() {
  const navigate = useNavigate();
  const [ErrMessage, setErrMessage] = useState("");
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      if (enteredEmail.trim().length > 0) {
        if (enteredPassword.trim().length > 0) {
          if (enteredEmail.includes("@") && enteredEmail.trim().length > 7) {
            if (enteredPassword.trim().length > 5) {
              dispatch(showLoading());
              const response = await login({
                email: enteredEmail,
                password: enteredPassword,
              });
              dispatch(hideLoading());
              if (response?.Status) {
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", true);
                dispatch(
                  userActions.userAddDetails({
                    user: response.user,
                    token: response.token,
                  })
                );
                successToast("Successfully logged");
                navigate("/");
                dispatch(hideLoading());
              }

              if (response.message) {
                errorToast(response.message);
                setErrMessage(response.message);
              }
            } else {
              console.log("password minimum 5 numbers");
              setErrMessage("password minimum 5 numbers");
            }
          } else {
            console.log("wrong email");
            setErrMessage("wrong email");
          }
        } else {
          console.log("fill Password");
          setErrMessage("fill Password");
        }
      } else {
        console.log("money2");

        setErrMessage("fill email");
      }
    } catch (error) {
      navigate("*");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-700  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="mb-4">
              <h1 className="text-2xl text-center font-semibold font-mono ">
                LOGIN TO YOUR ACCOUNT
              </h1>
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
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
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
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
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
                {ErrMessage && (
                  <small className=" text-red-600">{ErrMessage}</small>
                )}

                <div className="relative ">
                  <button
                    onClick={loginHandler}
                    type="button"
                    className=" inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2 mb-3 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-dark">
              Or
            </p>
          </div>
          <div className="text-center mb-4 cursor-pointer">
            <a
              className="inline-block text-sm text-slate-500 hover:text-slate-900"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create an account?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
