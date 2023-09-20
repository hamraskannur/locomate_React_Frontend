import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {valid} from "./functions"
import { signUp } from "../../../Api/userApi/userAuthRequest";

const SignupPage = () => {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [verify, setVerify] = useState("");
  const [ErrMessage, setErrMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    valid(setErrors,formData);
  };

  

  const signupHandler = async (e) => {
    e.preventDefault();
    setSubmit(true);
    const newErrors = await valid(setErrors,formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registration data:", formData);
      const response = await signUp(formData);
      if (response.status) {
        setVerify(response.message);
      } else {
        setErrMessage(response.message);
      }
    }
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
              <h1 className="text-2xl text-center font-semibold font-mono">
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
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                {submit && (
                  <small className="invalid-feedback text-red-600">
                    {errors.name}
                  </small>
                )}
                <div className="relative">
                  <input
                    autoComplete="off"
                    value={formData.username}
                    onChange={handleInputChange}
                    id="name"
                    name="username"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    UserName
                  </label>
                </div>
                {submit && (
                  <small className="invalid-feedback text-red-600">
                    {errors.username}
                  </small>
                )}

                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                    type="email"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                {submit && (
                  <small className="invalid-feedback text-red-600">
                    {errors.email}
                  </small>
                )}

                <div className="relative">
                  <div className="flex">
                    <input
                      autoComplete="off"
                      value={formData.password}
                      onChange={handleInputChange}
                      id="password"
                      name="password"
                      type={passwordShown ? "text" : "password"}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <img
                      role="presentation"
                      onClick={() => {
                        setPasswordShown(!passwordShown);
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
                {submit && (
                  <small className="invalid-feedback text-red-600">
                    {errors.password}
                  </small>
                )}
              </div>
              <div className="flex items-center justify-center border-none">
                {ErrMessage && (
                  <small className="text-red-600">{ErrMessage}</small>
                )}
              </div>

              <div className="relative border-none">
                <button
                  onClick={signupHandler}
                  type="button"
                  className="ml-2 inline-block rounded bg-slate-500 px-6 pb-2.5 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  sign up
                </button>
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
              onClick={() => navigate("/login")}
            >
              Have an account? Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
