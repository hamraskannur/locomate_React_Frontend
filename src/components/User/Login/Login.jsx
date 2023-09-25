import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../redux/userAuth";
import { useNavigate } from "react-router-dom";
import { valid } from "./functions";
import { login } from "../../../Api/userApi/userAuthRequest";

import { hideLoading, showLoading } from "../../../redux/loadingBar";
import { errorToast, successToast } from "../../Toast/Toast";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [ErrMessage, setErrMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    valid(setErrors, formData);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setSubmit(true);
    setLoading(true);

    const newErrors = await valid(setErrors, formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const response = await login(formData);

      if (response?.Status) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", true);
        dispatch(
          userActions.userAddDetails({
            user: response.user,
            token: response.token,
          })
        );
        setLoading(false);
        successToast("Successfully logged");
        navigate("/");
      }

      if (response.message) {
        setLoading(false);
        errorToast(response.message);
        setErrMessage(response.message);
      }
    } else {
      setLoading(false);
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                {submit && (
                  <small className="invalid-feedback text-red-600">
                    {errors.email}
                  </small>
                )}
                <div className="relative ">
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
                  {submit && (
                    <small className="invalid-feedback text-red-600">
                      {errors.password}
                    </small>
                  )}
                </div>
                {ErrMessage && (
                  <small className=" text-red-600">{ErrMessage}</small>
                )}

                <div className="relative ">
                  {!loading && (
                    <button
                      onClick={loginHandler}
                      type="button"
                      className=" inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Login
                    </button>
                  )}
                  {loading && (
                    <button
                      type="button"
                      className="flex justify-between ml-2 font-bold py-1 rounded bg-slate-700 hover:bg-slate-600 text-white px-6 pb-2 pt-2.5 text-xs uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mr-2 border border-gray-200  focus:z-10  focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="#1C64F2"
                        />
                      </svg>
                      Loading...
                    </button>
                  )}
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
