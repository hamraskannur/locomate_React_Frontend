import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { AiFillLike } from "react-icons/ai";

import { useSelector } from "react-redux";
import ReplayComment from "./ReplayComment";
// import InputEmoji from "react-input-emoji";
import { useNavigate } from "react-router-dom";
import { getReplayComment } from "../../../Api/adminApi/PostRequest";

const Comment = ({ comment,userId }) => {
  const navigate = useNavigate()  

  const [AllReplayComment, setAllReplayComment] = useState();
  const [Reply, setReply] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [likeCount, setLikeCount] = useState(comment?.likes?.length);
  const [replayCommentCount, setReplayCommentCount] = useState(0);


  
  const getUserAccount = async (user) => {
    navigate('/admin/userProfile', { state: {  userId: userId, admin:true } })
    
  };


  useEffect(() => {
    const getReplayCommentReq = async () => {
      try{
        const response = await getReplayComment(comment._id);
        setAllReplayComment(response);
        setReplayCommentCount(response.length);

      }catch(error){
        navigate('/admin/*');
      }
    };
    getReplayCommentReq();
  }, []);


  return (
    <>
      <div className="flex comment mt-0 p-2 border-slate-300 rounded-full ">
        <div onClick={getUserAccount} className="rounded-full h-9 w-9 overflow-hidden border-slate-700 cursor-pointer">
          <img
            src={
              comment?.ProfileImg
                ? comment?.ProfileImg
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
            }
            alt=""
          />
        </div>
        <div className="ml-3 bg-gray-100 w-full rounded-md ">
          <span  className="mt-3 ml-1 italic text-sm cursor-pointer font-semibold">
            {comment.username}
          </span>

          <Moment
            className=" self-center text-gray-500 text-xs ml-2 items-end"
            fromNow
          >
            {comment.createdAt}
          </Moment>
        
          <div className="info ml-3 mt-2 text-sm">
            <p>{comment.comment}</p>
          </div>
          <div className="flex mb-1 mt-2">
            <h1
              className="self-center text-gray-500 text-xs ml-2 cursor-pointer flex"
            >
              Like
            </h1>
            
            <h1 className="self-center text-gray-500 text-xs ml-1 cursor-pointer flex">
              {likeCount}
            </h1>
            <h1
              onClick={() => setReply(!Reply)}
              className="self-center text-gray-500 text-xs ml-2 cursor-pointer"
            >
              Reply {replayCommentCount}
            </h1>
          </div>
          <hr />

          {/* replay  */}
          {Reply && (
            <>
             
              {AllReplayComment.map((data) => (
                <ReplayComment data={data}  key={data._id}/>
              ))}
            </>
          )}
          {/* replay  */}
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default Comment;
