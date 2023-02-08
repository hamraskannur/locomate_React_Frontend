import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import { getComments } from "../../../Api/adminApi/PostRequest";
import { useNavigate } from "react-router-dom";

function Comments({ postId, setCount, count }) {
const navigate=useNavigate()

  const [newComment, setNewComment] = useState("");
  const [comment, setComment] = useState([]);
  
  useEffect(() => {
    const getCommentAll = async () => {
      try{
        const response = await getComments(postId);
        console.log(response);
        setComment(response);
        setCount(response.length);

      }catch(error){
        navigate('/admin/*');
      }
    };
    
    getCommentAll();
  }, []);

  const changeComment = (e) => {
    setNewComment(e);
  };


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
         <Comment comment={comment} userId={comment.userId} key={comment?._id} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
