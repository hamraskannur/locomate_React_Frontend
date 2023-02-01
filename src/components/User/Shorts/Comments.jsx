import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import InputEmoji from "react-input-emoji";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import { getShortsComments, postShortsComment } from "../../../Api/userApi/videoRequest";

function Comments({ postId, setCount, count }) {
  const user=useSelector((state) => state?.user?.user);
  const ProfileImg = user.ProfileImg

  const [newComment, setNewComment] = useState("");
  const [img, setImg] = useState("");
  const [comment, setComment] = useState([]);
  
  useEffect(() => {
    const getCommentAll = async () => {
      let response = await getShortsComments(postId);
      response = response?.reverse();
      setComment(response);
      setCount(response.length);
    };
    getCommentAll();
  }, []);

  const changeComment = (e) => {
    setNewComment(e);
  };

  const handlePostComment = async () => {
    if (newComment.trim().length === 0) return;

    try {
      const response = await postShortsComment(postId, newComment);
  
      setComment([response, ...comment]);
      setCount(count + 1);
      setNewComment("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="comment bg-white border-slate-300 p-2 rounded-md border-2">
      <div className="flex mt-3 gap-3 ">
        <div className="mt-2 ">
          <Avatar
            img={ProfileImg?ProfileImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"}
          />
        </div>

        <div className="border-none ml-0  grow rounded-full">
          <InputEmoji
            value={newComment}
            onChange={changeComment}
            cleanOnEnter
            onEnter={handlePostComment}
            placeholder="Type "
          />
        </div>
        <img
          onClick={handlePostComment}
          className="h-9 mt-2 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/3106/3106794.png"
        />
      </div>
      <div
        className={
          comment.length > 0
            ? "h-96	overflow-y-scroll scrollbar-hide"
            : "h-0 overflow-y-scroll scrollbar-hide"
        } 
      >
        {comment?.map((comment) => (
         <Comment comment={comment} key={comment?._id} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
