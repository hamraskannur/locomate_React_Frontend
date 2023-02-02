import { useEffect, useState } from "react";
import { getComments } from "../../../Api/adminApi/PostRequest";
import Comment from "./Comment";
import { useSelector } from "react-redux";

function Comments({ postId, setCount, count }) {
     console.log(postId);
  const [comment, setComment] = useState();
  
  useEffect(() => {
    const getCommentAll = async () => {
      const response = await getComments(postId);
      setComment(response);
      setCount(response.length);
    };
    getCommentAll();
  }, []);



  return (
    <>
  {comment &&  <div className="comment bg-white border-slate-300 p-2 rounded-md border-2  ">
   
      <div
        className={
          comment
          ? "h-96	overflow-y-scroll scrollbar-hide"
          : "h-0 overflow-y-scroll scrollbar-hide"
        }
        >
        {comment?.map((comment) => (
          <Comment comment={comment} key={comment?._id} />
          ))}
      </div>
    </div>}
          </>
  );
}

export default Comments;
