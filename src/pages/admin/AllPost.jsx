import React from "react";
import SideBar from "../../components/Admin/SideBar/SideBar";
import AdminNavBar from "../../components/Admin/NavBar/AdminNavBar";
import AllPosts from "../../components/Admin/AllPosts/AllPosts";
import { useState } from "react";

function AllPost() {
    const [selected,setSelected]=useState(true)
  return (
    <div className="bg-[#F3F3F6]">
      <AdminNavBar />
      <div className="bg-[#F3F3F6] flex ">
        <div className="sticky">
          <SideBar />
        </div>
        <div className="w-full ">
            <div className="sticky top-16 bg-[#F3F3F6]">

          <label
            htmlFor="Toggle3"
            className="inline-flex items-center p-2 rounded-md  dark:text-gray-400 w-full text-center"
          >
            <span
             onClick={()=>setSelected(false)}
              className={`cursor-pointer px-4 m-5 py-2 rounded-l-md bg-slate-700 text-white w-full`}
            >
              video
            </span>
            <span
              onClick={()=>setSelected(true)}
              className={`cursor-pointer px-4 py-2 m-5 rounded-l-md bg-slate-700 text-white  w-full`}
            >
              post
            </span>
          </label>
          </div>

        <div className="w-full ">
         <AllPosts selected={selected}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AllPost;
