import { useEffect, useState } from "react";
import { getComments } from "../../../Api/userApi/postRequest";
import Comment from "./Comment";
import { useSelector } from "react-redux";

function Comments({ postId, setCount, count }) {

  const [comment, setComment] = useState([]);
  
  useEffect(() => {
    const getCommentAll = async () => {
      const response = await getComments(postId);
      setComment(response);
      setCount(response.length);
    };
    getCommentAll();
  }, []);



  return (
    <div className="comment bg-white border-slate-300 p-2 rounded-md border-2  ">
   
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
