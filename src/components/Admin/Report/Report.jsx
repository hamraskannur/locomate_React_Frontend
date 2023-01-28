import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { blockPost, getAllBlockPost } from "../../../Api/adminApi/PostRequest";
import ReportUsers from "../ReportUsers/ReportUsers";

const Report = () => {
  const [post,setPost]=useState([])
  const [ShowAllReport,setShowAllReport]=useState()
  const [openUserReport,setOpenUserReport]=useState(false)
  useEffect(() => {
   const functionGetAllBlockPost =async () => {
       const response=await getAllBlockPost()
       console.log(response.Posts);
      setPost(response.Posts)
    };
    functionGetAllBlockPost();
  }, []);
 const handleBlockPost =async (postId) => {
 
     const response=await blockPost({postId,status:true})
  
 }
const handleUnBlockPost =async (postId) =>{
    const response=await blockPost({postId,status:false})

}
  return (
      <>
    {!openUserReport && <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 m-5">
      <div className="p-5 h-screen min-w-full bg-[#FFFFFF]">
        <table className="w-full mt-5">
          <thead className="bg-gray-50 border-b-2 border-stone-700 ">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                No
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                post Img
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Report count
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                more view
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Block user
              </th>
            </tr>
          </thead>
         {post && <tbody>
            {post?.map((item, index) => (
              <tr key={item._id} className="b-white border-b-2 ">
              <td className="p-3 pt-7  text-sm text-gray-700">{index +1}</td>
              <td className="p-3 pt-7 text-sm text-gray-700 "><img className="h-10 w-20" src={item?.PostId.img[0]} alt="logo" /></td>
              <td className="p-3 pt-7 text-sm text-gray-700">{item.userText.length}</td>
              <td>
                <button
                  type="button"
                  onClick={()=>{setOpenUserReport(true), setShowAllReport(item)} }
                  className="mt-4 inline-block px-6 py-2.5 bg-slate-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-slate-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                  view user
                </button>
              </td>
            { item?.PostId?.status? <td>
                <button
                onClick={()=>{handleBlockPost(item?.PostId?._id)}}
                  type="button"
                  className="mt-4 inline-block px-6 py-2.5 bg-red-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-500 hover:shadow-lg focus:bg-red-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                  Unblock Post
                </button>
              </td>:
              <td>
                <button
                   onClick={()=>{handleBlockPost(item?.PostId?._id)}}
                  type="button"
                  className="mt-4 inline-block px-6 py-2.5 bg-slate-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-slate-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                  block Post
                </button>
              </td>}
            </tr>
            ))} 
          </tbody>}
        </table>
      </div>
    </div>}
      {openUserReport && <ReportUsers ShowAllReport={ShowAllReport} setOpenUserReport={setOpenUserReport}/>}
            </>
  );
};

export default Report;
