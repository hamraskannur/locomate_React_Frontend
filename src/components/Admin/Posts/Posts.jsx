import OutsideClickHandler from "react-outside-click-handler";
import React, { useState } from "react";
import Moment from "react-moment";
import Comments from "./Comments";
import Avatar from "./Avatar";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useNavigate } from "react-router-dom";
import { BiBlock } from "react-icons/bi";
import { FcLikePlaceholder } from "react-icons/fc";
import { blockPost } from "../../../Api/adminApi/PostRequest";

function Post({ post, onePost }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [PostLength, setPostLength] = useState(post?.likes?.length);
const [block,setBlock]=useState(post?.status)
  const getAccountPage = async (userId) => {
    navigate("/admin/userProfile", { state: { userId: userId } });
  };
  const submitBlockPost = async (postId) => {
    try{
      const status = false
      await blockPost({postId, status});
      setBlock(false)

    }catch(error){
      navigate('/admin/*');
    }
  };
  const submitUnblockPost = async (postId) => {
    try{

      const status = true
      await blockPost({postId, status});
      setBlock(true)
    }catch(error){
      navigate('/admin/*');
    }
  };
  return (
    <>
      <div
        className={`${
          onePost ? "shadow-sm" : "shadow-lg"
        } bg-white    shadow-gray-400 rounded-md p-4 mb-5 max-w-max  w-10/12 mx-auto  `}
      >
        <div className="flex gap-3">
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
            </p>
          </div>
          {
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
                <div className="relative">
                  {dropdownOpen && (
                    <>{block ?<div onClick={()=>submitBlockPost(post._id)} className="cursor-pointer absolute right-6 border border-gray-300 bg-white shadow-md shadow-gray-100 p-3 rounded-md w-36">
                      <div className="cursor-pointer">
                        <p
                          href=""
                          className="flex gap-3  py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all  hover:shadow-md shadow-gray-400"
                        >
                          {React.createElement(BiBlock, { size: "25" })}
                          Block Post
                        </p>
                      </div>
                    </div>:<div onClick={()=>submitUnblockPost(post._id)}   className="cursor-pointer absolute right-6 border border-gray-300 bg-white shadow-md shadow-gray-100 p-3 rounded-md w-36">
                        <div className="cursor-pointer">
                          <p
                            href=""
                            className="flex gap-3  py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all  hover:shadow-md shadow-gray-400"
                          >
                            {React.createElement(BiBlock, { size: "25" })}
                            UnBlock 
                          </p>
                        </div>
                      </div>}</>
                  )}
                </div>
              </OutsideClickHandler>
            </div>
          }
        </div>

        <div>
          <div className="w-full ">
            <p  className="my-3  text-sm break-all">
              {post?.description}
            </p>
          </div>
          {post.shorts ? (
            <div className="rounded-md overflow-hidden ">
              <video className="w-full " controls>
                <source src={post?.shorts} />
              </video>
            </div>
          ) : (
            <div className="rounded-md overflow-hidden w-full">
              <img
                className="w-full h-80"
                src={post?.img[0]}
               
                alt=""
              />
            </div>
          )}
        </div>
        {
          <>
            <div className="flex mt-5 gap-4">
              <button type="button" className="flex gap-2 items-center">
                <div className="text-black">
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
                {count != 0 && count}
              </button>
            </div>
          </>
        }
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
