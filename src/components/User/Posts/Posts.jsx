/* eslint-disable max-len */
import OutsideClickHandler from "react-outside-click-handler";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Moment from "react-moment";
import { FcLike } from "react-icons/fc";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import Comments from "./Comments";
import Avatar from "./Avatar";
import { AddPostActions } from "../../../redux/AddPost";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {
  deletePost,
  likePostReq,
  savePost,
} from "../../../Api/userApi/postRequest";
import EditPost from "../editPost/editPost";
import ReportPost from "../ReportPost/ReportPost";

function Post({ post, onePost, admin }) {
  const user = useSelector((state) => state?.user?.user);
  const userId = user?._id;
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(false);
  const [like, setLike] = useState(post?.likes?.includes(userId));
  const [count, setCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [PostLength, setPostLength] = useState(post?.likes?.length);
  const [savedStatus, setSavedStatus] = useState(false);
  const [editPost,setEditPost] = useState(false)
  const [report,setReport]=useState(false)

  useEffect(() => {
    setSavedStatus(user?.saved?.includes(post?._id));
    setCurrentUser(userId === post?.userId?._id);
  }, [post]);

  const getAccountPage = async (user) => {
    if (admin) {
      router.push(
        {
          pathname: "/admin/oneUser",
          query: {
            userId: userId,
            admin: true,
          },
        },
        "/admin/getviewUser"
      );
    } else {
      if (userId === user) {
        router.push("/user/myAccount");
      } else {
        router.push(`/user/getAccount/${user}`);
      }
    }
  };
  const handleSavePost = async (postId) => {
    const response = await savePost({ postId });
    console.log(response);
    if (response.success) {
      setSavedStatus(!savedStatus);
    }
  };

  const likePost = async (PostId) => {
    const data = await likePostReq(PostId);
    if (data.success) {
      if (like) {
        setPostLength(PostLength - 1);
        setLike(false);
      } else {
        setLike(true);
        setPostLength(PostLength + 1);
      }
    } else {
    }
  };
  const handleDeletePost = async (postId) => {
    const response = await deletePost(postId);
    if (response.success) {
     await dispatch(AddPostActions.postAdd());
    }
  };



 const submit = (postId) => {
    confirmAlert({
      title: 'Confirm to ',
      message: 'Are you delete your post.',
      buttons: [
        { 
          label: 'Yes',
          onClick: () => {handleDeletePost(postId)}
        },
        {
          label: 'No',
        }
      ]
    });
  };



  const copy = async (postId) => {
    const url = `${process.env.NEXT_PUBLIC_USER_API}/onePost/${postId}`;
    await navigator.clipboard.writeText(url);
    alert("Text copied");
  };

  return (
    <>
     

      <div
        className={`${
          onePost ? "shadow-md" : "shadow-lg"
        } bg-white    shadow-gray-400 rounded-md p-4 m-5 mb-5 max-w-max mt-6 `}
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
          {!admin && (
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
                  {dropdownOpen && !currentUser && (
                    <div className="cursor-pointer absolute right-6 border border-gray-300 bg-white shadow-md shadow-gray-100 p-3 rounded-md w-36">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleSavePost(post?._id)}
                      >
                        {savedStatus ? (
                          <p
                            href=""
                            className="flex gap-3 py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all hover:shadow-md shadow-gray-400"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="black"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                              />
                            </svg>
                            Save post
                          </p>
                        ) : (
                          <p
                            href=""
                            className="flex gap-3  py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all  hover:shadow-md shadow-gray-400"
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
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                              />
                            </svg>
                            Save post
                          </p>
                        )}
                      </div>
                      <div onClick={()=>setReport(true)}>

                      <p
                        href=""
                        className="flex gap-3 py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all hover:shadow-md shadow-gray-400"
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
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                          />
                        </svg>
                        Report
                      </p>
                    </div>
                    </div>

                  )}
                  {dropdownOpen && currentUser && !admin && (
                    <div className="cursor-pointer absolute right-6 border border-gray-300 bg-white shadow-md shadow-gray-100 p-3 rounded-md w-36">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleSavePost(post?._id)}
                      >
                        {savedStatus ? (
                          <p
                            href=""
                            className="flex gap-3 py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all hover:shadow-md shadow-gray-400"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="black"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                              />
                            </svg>
                            Save post
                          </p>
                        ) : (
                          <p
                            href=""
                            className="flex gap-3  py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all  hover:shadow-md shadow-gray-400"
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
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                              />
                            </svg>
                            Save post
                          </p>
                        )}
                      </div>

                      <div onClick={()=>setEditPost(true)} className="cursor-pointer">
                        <p
                          href=""
                          className="flex gap-3 py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all hover:shadow-md shadow-gray-400"
                        >
                          <div>
                            {React.createElement(BsPencilSquare, {
                              size: "20",
                            })}
                          </div>
                          Edit post
                        </p>
                      </div>
                      <div onClick={() => submit(post?._id)}>
                        <p className="flex gap-3 py-2 my-2 hover:bg-[#bbc0c7] -mx-2 px-2 rounded-md transition-all hover:shadow-md shadow-gray-400">
                          <div>
                            {React.createElement(MdDelete, { size: "20" })}
                          </div>
                          Delete post
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </OutsideClickHandler>
            </div>
          )}
        </div>
        <div>
          <p className="my-3 max-w-6xl text-sm">{post?.description}</p>
          <div className="rounded-md overflow-hidden w-full">
            <img
              className="w-full h-80"
              src={post?.img[0]}
              // src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>
        {!admin && (
          <>
            {" "}
            <div className="flex mt-5 gap-4">
              <button type="button" className="flex gap-2 items-center">
                {like ? (
                  <div onClick={() => likePost(post._id)}>
                    {React.createElement(FcLike, { size: "25" })}
                  </div>
                ) : (
                  <svg
                    onClick={() => likePost(post._id)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                )}
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
              <button
                onClick={() => copy(post._id)}
                type="button"
                className="flex gap-2 items-center"
              >
                copy Link
              </button>
            </div>{" "}
          </>
        )}
        {!admin && (
          <div className="mt-3">
            {commentsOpen && (
              <Comments postId={post?._id} setCount={setCount} count={count} />
            )}
          </div>
        )}
       {editPost && <EditPost img={post?.img[0]} description={post?.description} postId={post?._id} setEditPost={setEditPost}/>}
      {report && <ReportPost setReport={setReport} postId={post?._id}/>}
      </div>
    </>
  );
}

export default Post;
