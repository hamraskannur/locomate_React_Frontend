/* eslint-disable max-len */
import OutsideClickHandler from "react-outside-click-handler";
import React, { useState } from "react";
import {  useSelector } from "react-redux";
import Moment from "react-moment";
import { FcLikePlaceholder } from "react-icons/fc";
import { useEffect } from "react";
import { BiBlock} from 'react-icons/bi'
import Comments from "./Comments";
import Avatar from "./Avatar";

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

  import { useNavigate } from "react-router-dom";
import { blockPost } from "../../../Api/adminApi/PostRequest";

function Post({ post, onePost }) {
  const user = useSelector((state) => state?.user?.user);
  const userId = user?._id;
  const navigate = useNavigate()  
  const [currentUser, setCurrentUser] = useState(false);
  const [count, setCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [PostLength, setPostLength] = useState(post?.likes?.length);
const [block,setBlock]=useState(post?.status)
  useEffect(() => {
    setCurrentUser(userId === post?.userId?._id);
  }, [post,user,userId]);

  const getAccountPage = async (user) => {
    navigate('/admin/userProfile', { state: {  userId: user, admin:true } })
    
  };
  const submitBlockPost = async (postId) => {
    console.log("this not implemented");
    const status = false
    await blockPost({postId, status});
    setBlock(false)
  };
  const submitUnblockPost = async (postId) => {
    console.log("this not implemented");
    const status = true
    await blockPost({postId, status});
    setBlock(true)
  };
  return (
    <>
     

      <div
        className={`${
          onePost ? "shadow-md" : "shadow-lg" 
        } bg-[#F3F3F6]    shadow-gray-400 rounded-md p-3 mb-5 mt-5 max-w-max  w-10/12 mx-auto md:mt-6  `}
      >
        <div className="flex gap-3 ">
          <div>
            <Avatar
              img={
                post?.userId?.ProfileImg
                  ? post?.userId?.ProfileImg
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
              }
            />
          </div>
          <div
            onClick={() => getAccountPage(post?.userId?._id)}
            className="grow cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <p className="font-semibold">{post?.userId?.username}</p>
            </div>
            <p className="text-gray-500 text-sm">
              <Moment fromNow>{post?.createdAt}</Moment>
          {post?.edit && <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">edited</span>}
            </p>
          </div>
            <div className="">
              <button
                type="button"
                className="text-gray-400"
                onClick={() => setDropdownOpen(true)}
              >
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
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </button>
              <OutsideClickHandler
                onOutsideClick={() => {
                  setDropdownOpen(false);
                }}
              >
                <div className="relative z-50">
                  {dropdownOpen && !currentUser && (
                    <div className="cursor-pointer absolute z-50 right-6 border border-gray-300 bg-white shadow-md shadow-gray-100 p-3 rounded-md w-36">
                     { block?<div
                     onClick={()=>submitBlockPost(post._id)}
                        className="cursor-pointer"
                      >
                         
                          <p
                            href=""
                            className="flex gap-3  py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all  hover:shadow-md shadow-gray-400"
                          >
                            {React.createElement(BiBlock, { size: "25" })}

                            Block 
                          </p>
                      
                      </div>:
                      <div
                       onClick={()=>submitUnblockPost(post._id)}
                        className="cursor-pointer"
                      >
                         
                          <p
                            href=""
                            className="flex gap-3  py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all  hover:shadow-md shadow-gray-400"
                          >
                                                       {React.createElement(BiBlock, { size: "25" })}

                            unBlock 
                          </p>
                      
                      </div>}
                    </div>

                  )}
                
                </div>
              </OutsideClickHandler>
            </div>
        </div>
        <div className="w-full">
          <p className="my-1 text-sm break-all">{post?.description} </p>
          <div className="rounded-md overflow-hidden w-full">
          <video className="w-full object-cover max-h-96 mb-5" width="400" controls>
                 <source src={post?.shorts} />
            </video>
          </div>
        </div>
          <>
            <div className="flex mt-2 gap-4">
              <button type="button" className="flex gap-2 items-center">
                  <div >
                    {React.createElement(FcLikePlaceholder, { size: "25" })}
                  </div>
               
                {PostLength}
              </button>
              <button
                type="button"
                onClick={() => {
                  setCommentsOpen(!commentsOpen);
                }}
                className="flex gap-2 items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655z" />
                </svg>
                {count !== 0 && count}
              </button>
           
            </div>{" "}
          </>
          <div className="mt-3">
            {commentsOpen && (
              <Comments postId={post?._id} setCount={setCount} count={count} />
            )}
          </div>
      </div>
    </>
  );
}

export default Post;
