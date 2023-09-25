import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeToPrivate } from "../../../Api/userApi/profileApi";
import { userActions } from "../../../redux/userAuth";
import { successToast } from "../../Toast/Toast";

const Settings = () => {
    const userPublic=useSelector((state)=>state?.user?.user?.public)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [switchChecked, setStateChecked] = useState(!userPublic);
  const handleLogout = () => {
    localStorage.clear();
    dispatch(userActions.userLogout());
    navigate("/login");
  };
  const changeHandler=(state)=>{
    const fetchData=async () =>{
       const checked = state.target.checked
       try{
      
         const response= await changeToPrivate({checked:!checked})
         if(response.success){
           successToast(`your account changed ${switchChecked?"public":"private"} `)
             setStateChecked(!switchChecked);
         }
       }catch(error){
         navigate('*');
       }
    }
    fetchData()
  }
  return (
    <>
      <div className="px-4 bg-white   rounded-md m-5">
        <div className="grid gap-5 p-5">
          <div className="flex justify-between">
            <div className="flex  gap-4 w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </span>
              <p className="font-bold hover:underline cursor-pointer">
                Privacy
              </p>
            </div>
            <label className="relative inline-flex mx-auto mt-1 cursor-pointer">
              <input onChange={changeHandler} type="checkbox"  className="sr-only peer" checked={switchChecked}  />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 absolute peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
            </label>
          </div>

          <div
            className="flex gap-4 w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded"
            onClick={handleLogout}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </span>
            <p className="font-bold hover:underline cursor-pointer text-blue-500">
              LogOut
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
