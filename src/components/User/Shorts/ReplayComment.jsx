import React, { useState } from "react";
import Moment from "react-moment";
import Avatar from "./Avatar";
import { AiFillLike } from "react-icons/ai";
import { likeReplayComment } from "../../../Api/userApi/postRequest";

const ReplayComment = ({data ,userId}) => {
    const [like,setLike]=useState(data.likes.includes(userId))
    const [likeCount,setLikeCount]=useState(data.likes.length)
const likeHandler =async () =>{
   const  commentId=data._id
    const response = await likeReplayComment({commentId})
     if(response.success){
        if(like){
            setLikeCount(likeCount-1)
            setLike(false)
        }else{
            setLikeCount(likeCount+1)
            setLike(true)
        }
     }
}

  return (
    <>
      <div className="ml-8 border-t-2 mt-2">
        <div className="flex">
          <div className="mt-2 ">
            <Avatar
              img={data?.ProfileImg?data?.ProfileImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png  "}
            />
          </div>
          <span className="font-semibold mt-5 italic text-sm ml-2">{data.username}</span>
          <Moment
            className="self-center text-gray-500 text-xs ml-2 mt-4 items-end"
            fromNow
          >
            {data.createdAt}
          </Moment>
        </div>
        <div className="info ml-4 py-1">
          <p>{data.comment}</p>
        </div>
        <div className="flex mb-1 ">
            <div className="flex">

          <h1 onClick={likeHandler} className="self-center text-gray-500 text-xs ml-2  cursor-pointer ">
            Like 
          </h1>

          {like && (
              <div className="ml-1 mt-1">
                {React.createElement(AiFillLike, { size: "15" })}
              </div>
            )}
         <h1 className="ml-1 text-xs mt-1">{likeCount}</h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default ReplayComment;
