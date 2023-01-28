import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  showPassword,
  showRepeatPassword,
  nameChangeHandler,
  emailChangeHandler,
  dobChangeHandler,
  phoneNoChangeHandler,
  passwordChangeHandler,
  repeatPasswordHandler,
  usernameChangeHandler,
  submitHandler,
} from "./functions";

function Signup() {
  const router = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);
  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [username, setUserName] = useState("");
  const [enteredDob, setEnteredDob] = useState("");
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredRepeatPassword, setEnteredRepeatPassword] = useState("");

  const [ErrMessage, setErrMessage] = useState("");
  const [verify, setVerify] = useState("");

  const signupHandler = (event) => {
    submitHandler(
      event,
      enteredName,
      username,
      enteredEmail,
      enteredPhoneNo,
      enteredDob,
      enteredPassword,
      enteredRepeatPassword,
      setEnteredName,
      setEnteredEmail,
      setUserName,
      setEnteredDob,
      setEnteredPhoneNo,
      setEnteredPassword,
      setEnteredRepeatPassword,
      setVerify,
      setErrMessage
    );
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 p-3">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl " />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div>
            {verify && (
              <div className="bg-green-200 h-7 text-center text-black text-lg ">
                {verify}
              </div>
            )}
          </div>
          <div className="max-w-md mx-auto ">
            <div>
              <h1 className="text-2xl font-semibold">
                Sign up to see photos and
                <br />
                videos from your friends.
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-3 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    onChange={(e) => {
                      nameChangeHandler(e, setEnteredName);
                    }}
                    id="name"
                    value={enteredName}
                    name="name"
                    type="text"
                    className="border-gray-700 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    onChange={(e) => {
                      usernameChangeHandler(e, setUserName);
                    }}
                    id="name"
                    value={username}
                    name="name"
                    type="text"
                    className="border-gray-700 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    UserName
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    value={enteredEmail}
                    onChange={(e) => {
                      emailChangeHandler(e, setEnteredEmail);
                    }}
                    name="email"
                    type="email"
                    className="border-gray-700 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    value={enteredDob}
                    onChange={(e) => {
                      dobChangeHandler(e, setEnteredDob);
                    }}
                    autoComplete="off"
                    id="Username"
                    name="Username"
                    type="date"
                    className="border-gray-700 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Date of birth
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    onChange={(e) => {
                      phoneNoChangeHandler(e, setEnteredPhoneNo);
                    }}
                    id="PhoneNo"
                    name="PhoneNo"
                    type="number"
                    value={enteredPhoneNo}
                    className="border-gray-700 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Phone No
                  </label>
                </div>
                <div className="relative">
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
                      className="border-gray-700 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600"
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
                <div className="relative">
                  <div className="flex">
                    <input
                      autoComplete="off"
                      onChange={(e) => {
                        repeatPasswordHandler(e, setEnteredRepeatPassword);
                      }}
                      id="password"
                      value={enteredRepeatPassword}
                      name="password"
                      type={repeatPasswordShown ? "text" : "password"}
                      className="border-gray-700 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <img
                      role="presentation"
                      onClick={() => {
                        showRepeatPassword(
                          repeatPasswordShown,
                          setRepeatPasswordShown
                        );
                      }}
                      src={
                        repeatPasswordShown
                          ? "https://cdn-icons-png.flaticon.com/512/565/565655.png"
                          : "https://cdn-icons-png.flaticon.com/512/6684/6684701.png"
                      }
                      className={
                        repeatPasswordShown ? "w-8 h-8 p-1" : "w-8 h-8"
                      }
                      alt=""
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Repeat Password
                    </label>
                  </div>
                </div>
                <small
                  role="presentation"
                  className="text-slate-900 cursor-pointer"
                  onClick={() => router.push("/user/login")}
                >
                  Have an account? Login
                </small>
             
               
              </div>
                <div className="flex items-center justify-center border-none" >
                {ErrMessage && (
                  <small className="text-red-600">{ErrMessage}</small>
                )}
                </div>

                <div className="relative border-none">
                  <button
                    onClick={signupHandler}
                    type="button"
                    className="bg-slate-500 text-white rounded-md px-2 py-1"
                  >
                    sign up
                  </button>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
