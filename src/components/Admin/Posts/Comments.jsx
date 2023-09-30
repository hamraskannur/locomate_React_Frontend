import { useEffect, useState } from "react";
import { getComments } from "../../../Api/adminApi/PostRequest";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Comments({ postId, setCount, count }) {
  const navigate = useNavigate()  
  const [comment, setComment] = useState();
  
  useEffect(() => {
    (async () => {
      const response = await getComments(postId);
      setComment(response);
      setCount(response.length);
    })()
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
