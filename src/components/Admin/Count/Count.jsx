import React from "react";
import {  MdSlowMotionVideo } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { AiOutlineSave } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Count = ({userCount,postCount,shortsCount}) => {
    const navigate=useNavigate()
 
  return (
    <div className="col-span-12 mt-8 ">
      <div className="flex items-center h-10 intro-y">
        <h2 className="mr-5 text-lg font-medium truncate">Dashboard</h2>
      </div>
      <div className="grid grid-cols-9 gap-14  ">
        <button
         onClick={()=>navigate("/admin/allPost")}
          className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
        >
          <div className="p-5 w-full ">
            <div className="flex justify-between">
              <div >
              {React.createElement(AiOutlineSave, { size: "25" })}

              </div>
            
            </div>
            <div className="ml-2 w-full flex-1">
              <div>
                <div className="mt-3 text-3xl font-bold leading-8">{postCount}</div>

                <div className="mt-1 text-base text-gray-600">Post</div>
              </div>
            </div>
          </div>
        </button>
        <button
        onClick={()=>navigate("/admin/allPost")}
          className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
        >
          <div className="p-5">
            <div className="flex justify-between">
            <div>
              {React.createElement(MdSlowMotionVideo, { size: "25" })}

              </div>
             
            </div>
            <div className="ml-2 w-full flex-1">
              <div>
                <div className="mt-3 text-3xl font-bold leading-8">{shortsCount}</div>

                <div className="mt-1 text-base text-gray-600">Shorts</div>
              </div>
            </div>
          </div>
        </button>
        <button
        onClick={()=>navigate("/admin/allUsers")}
          className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
        >
          <div className="p-5">
            <div className="flex justify-between">
            <div >
              {React.createElement(ImUsers, { size: "25" })}

              </div>
            </div>
            <div className="ml-2 w-full flex-1">
              <div>
                <div className="mt-3 text-3xl font-bold leading-8">{userCount}</div>

                <div className="mt-1 text-base text-gray-600">Users</div>
              </div>
            </div>
          </div>
        </button>
      
      </div>
    </div>
  );
};

export default Count;
