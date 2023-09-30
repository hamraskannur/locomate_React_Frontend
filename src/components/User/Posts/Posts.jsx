import OutsideClickHandler from "react-outside-click-handler";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { FcLike } from "react-icons/fc";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import Comments from "./Comments";
import { AddPostActions } from "../../../redux/AddPost";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import {
  deletePost,
  likePostReq,
  savePost,
} from "../../../Api/userApi/postRequest";
import EditPost from "../editPost/EditPost";
import ReportPost from "../ReportPost/ReportPost";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../Toast/Toast";
import Avatars from "../avatar/Avatar";

function Post({ post, onePost }) {
  const user = useSelector((state) => state?.user?.user);
  const userId = user?._id;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(false);
  const [like, setLike] = useState(post?.likes?.includes(userId));
  const [count, setCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [PostLength, setPostLength] = useState(post?.likes?.length);
  const [description,setDescription]=useState(post?.description)
  const [savedStatus, setSavedStatus] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [report, setReport] = useState(false);

  useEffect(() => {
    setSavedStatus(user?.saved?.includes(post?._id));
    setCurrentUser(userId === post?.userId?._id);
    setDescription(post?.description)
  }, [post, user, userId]);

  const getAccountPage = async (user) => {
    if (userId === user) {
      navigate("/myAccount");
    } else {
      navigate("/friendsAccount", { state: { userId: user } });
    }
  };
  const handleSavePost = async (postId) => {
    try {
      const response = await savePost({ postId });
      if (response.success) {
        setSavedStatus(!savedStatus);
      }
    } catch (error) {
      navigate("*");
    }
  };

  const likePost = async (PostId) => {
    try {
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
    } catch (error) {
      navigate("*");
    }
  };
  const handleDeletePost = async (postId) => {
    try {
      const response = await deletePost(postId);
      if (response.success) {
        successToast("successfully deleted post");
        await dispatch(AddPostActions.postAdd());
      } else {
        errorToast("something went wrong");
      }
    } catch (error) {
      navigate("*");
    }
  };

  const submit = (postId) => {
    confirmAlert({
      title: "Confirm to ",
      message: "Are you delete your post.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            handleDeletePost(postId);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <>
      <div
        className={`${
          onePost ? "shadow-md" : "shadow-lg"
        } bg-white    shadow-gray-400 rounded-md p-3 md:mx-5 mb-5 mt-5  md:mt-6  `}
      >
        <div className="flex gap-3 ">
          <div>
            <Avatars img={post?.userId?.ProfileImg }
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
              {post?.edit && (
                <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  edited
                </span>
              )}
            </p>
          </div>
          <div className="z-50">
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
                    <div onClick={() => setReport(true)}>
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
                {dropdownOpen && currentUser && (
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

                    <div
                      onClick={() => setEditPost(true)}
                      className="cursor-pointer"
                    >
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
        </div>
        <div>
          <p className="my-1 break-all text-sm">{description}</p>
          <div className="rounded-md overflow-hidden w-full">
            {
              post?.shorts?
              <video
              class="w-full object-cover max-h-96 mb-5"
              width="400"
              controls
            >
              <source src={post?.shorts} />
            </video>:
              <img className="w-full h-80" src={post?.img[0]} alt="" />
            }
          </div>
        </div>
        <>
          {" "}
          <div className="flex mt-2 gap-4">
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
              {count !== 0 && count}
            </button>
          </div>{" "}
        </>
        <div className="mt-3">
          {commentsOpen && (
            <Comments postId={post?._id} setCount={setCount} count={count} />
          )}
        </div>
        {editPost && (
          <EditPost
            img={post?.img[0]}
            shorts={false}
            description={description}
            setDescription={setDescription}
            postId={post?._id}
            setEditPost={setEditPost}
          />
        )}
        {report && (
          <ReportPost video={false} setReport={setReport} postId={post?._id} />
        )}
      </div>
    </>
  );
}

export default Post;
