/* eslint-disable max-len */
import OutsideClickHandler from "react-outside-click-handler";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { likeShortReq, deleteShort } from '../../../Api/userApi/videoRequest'
import EditShorts from "../editShorts/EditShorts";
import ReportPost from "../ReportPost/ReportPost";
import { useNavigate } from "react-router-dom";

function Shorts({ shorts, onePost }) {
  const user = useSelector((state) => state?.user?.user);
  const userId = user?._id;
  const navigate = useNavigate()  
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(false);
  const [like, setLike] = useState(shorts?.likes?.includes(userId));
  const [count, setCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [PostLength, setPostLength] = useState(shorts?.likes?.length);
  const [savedStatus, setSavedStatus] = useState(false);
  const [editPost,setEditPost] = useState(false)
  const [report,setReport]=useState(false)

  useEffect(() => {
    setSavedStatus(user?.saved?.includes(shorts?._id));
    setCurrentUser(userId === shorts?.userId?._id);
  }, [shorts]);

  const getAccountPage = async (user) => {
   
      if (userId === user) {

        navigate("/myAccount");
      } else {
        
        navigate('/FriendsAccount',{ state: { userId: user }} );
      }
    
  };
  const handleSavePost = async (postId) => {
    const response = await savePost({ postId });
    if (response.success) {
      setSavedStatus(!savedStatus);
    }
  };

  const likeShorts = async (PostId) => {
    const data = await likeShortReq(PostId);
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
  const handleDeleteShorts = async (ShortsId) => {
    const response = await deleteShort(ShortsId);
    if (response.success) {
     await dispatch(AddPostActions.postAdd());
    }
  };



 const submit = (ShortsId) => {
    confirmAlert({
      title: 'Confirm to ',
      message: 'Are you delete your post.',
      buttons: [
        { 
          label: 'Yes',
          onClick: () => {handleDeleteShorts(ShortsId)}
        },
        {
          label: 'No',
        }
      ]
    });
  };




  return (
    <>
     

      <div
        className={`${
          onePost ? "shadow-md" : "shadow-lg"
        } bg-white    shadow-gray-400 rounded-md p-4 mx-5 mb-5 mt-5  md:mt-6  max-w-max  `}
      >
        <div className="flex gap-3 ">
          <div>
            <Avatar
              img={
                shorts?.userId?.ProfileImg
                  ? shorts?.userId?.ProfileImg
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
              }
            />
          </div>
          <div
            onClick={() => getAccountPage(shorts?.userId?._id)}
            className="grow cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <p className="font-semibold">{shorts?.userId?.username}</p>
            </div>
            <p className="text-gray-500 text-sm">
              <Moment fromNow>{shorts?.createdAt}</Moment>
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
                    <div className=" cursor-pointer absolute right-6 border border-gray-300 bg-white shadow-md shadow-gray-100 p-3 rounded-md w-36">
                      
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
                  {dropdownOpen && currentUser && (
                    <div className="cursor-pointer absolute right-6 border border-gray-300 bg-white shadow-md shadow-gray-100 p-3 rounded-md w-36">
                      

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
                      <div onClick={() => submit(shorts?._id)}>
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
          <p className="my-1 max-w-6xl text-sm">{shorts?.description}</p>
          <div className="rounded-md overflow-hidden w-full">
          <video className="w-full" controls>
                 <source src={shorts?.img} />
            </video>
          </div>
        </div>
          <>
            <div className="flex mt-5 gap-4">
              <button type="button" className="flex gap-2 items-center">
                {like ? (
                  <div onClick={() => likeShorts(shorts._id)}>
                    {React.createElement(FcLike, { size: "25" })}
                  </div>
                ) : (
                  <svg
                    onClick={() => likeShorts(shorts._id)}
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
            
            </div>
          </>
          <div className="mt-3">
            {commentsOpen && (
              <Comments postId={shorts?._id} setCount={setCount} count={count} />
            )}
          </div>
       {editPost && <EditShorts img={shorts?.img} description={shorts?.description} postId={shorts?._id} setEditPost={setEditPost}/>}
      {report && <ReportPost video={true} setReport={setReport} postId={shorts?._id}/>}
      </div>
    </>
  );
}

export default Shorts;
