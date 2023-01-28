import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { AiFillLike } from "react-icons/ai";
import {
  getReplayComment,
  likeMainComment,
  postReplayComment,
} from "../../../Api/userApi/postRequest";
import { MdDelete } from "react-icons/md"
import { useSelector } from "react-redux";
import ReplayComment from "./ReplayComment";
import InputEmoji from "react-input-emoji";

const Comment = ({ comment }) => {
  const user = useSelector((state) => state?.user?.user);
  const userId = user._id;
  const [AllReplayComment, setAllReplayComment] = useState();
  const [Reply, setReply] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [like, setLike] = useState(comment.likes.includes(userId));
  const [likeCount, setLikeCount] = useState(comment?.likes?.length);
  const [replayCommentCount, setReplayCommentCount] = useState(0);


  const getUserAccount = () =>{
    if (userId === user) {
      router.push("/user/myAccount");
    } else {
      router.push(`/user/getAccount/${user}`);
    }
  }

  useEffect(() => {
    const getReplayCommentReq = async () => {
      const response = await getReplayComment(comment._id);
      setAllReplayComment(response);
      setReplayCommentCount(response.length);
    };
    getReplayCommentReq();
  }, []);

  const likeMainLike = async (commentId) => {
    const response = await likeMainComment({ commentId });
    if (response.success) {
      if (like) {
        setLikeCount(likeCount - 1);
        setLike(false);
      } else {
        setLikeCount(likeCount + 1);
        setLike(true);
      }
    }
  };

  const changeComment = (e) => {
    setNewComment(e);
  };

  const handlePostReplayComment = async () => {
    if (newComment.trim().length === 0) return;
    try {
      const commentId = comment._id;
      const response = await postReplayComment({ commentId, newComment });
      response.username = user.username;
      response.ProfileImg = user.ProfileImg;
      response.likes=[]
      setAllReplayComment([response, ...AllReplayComment]);
      setReplayCommentCount(replayCommentCount + 1);
      setNewComment("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex comment mt-0 p-2 border-slate-300 rounded-full ">
        <div className="rounded-full h-9 w-9 overflow-hidden border-slate-700 cursor-pointer">
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
          <span onClick={()=>getUserAccount()} className="mt-3 ml-1 italic text-sm cursor-pointer font-semibold">
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
              onClick={() => likeMainLike(comment._id)}
              className="self-center text-gray-500 text-xs ml-2 cursor-pointer flex"
            >
              Like
            </h1>
            {like && (
              <div className="ml-1">
                {React.createElement(AiFillLike, { size: "15" })}
              </div>
            )}
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
              <div className="flex mt-2 gap-3 ">
                <div className="border-none ml-0 z-50 grow rounded-full">
                  <InputEmoji
                    value={newComment}
                    onChange={changeComment}
                    cleanOnEnter
                    onEnter={handlePostReplayComment}
                    placeholder="Type "
                  />
                </div>
                <img
                  onClick={handlePostReplayComment}
                  className="h-9 mt-2 cursor-pointer"
                  src="https://cdn-icons-png.flaticon.com/512/3106/3106794.png"
                />
              </div>
              {AllReplayComment.map((data) => (
                <ReplayComment data={data} userId={user._id} key={data._id}/>
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
