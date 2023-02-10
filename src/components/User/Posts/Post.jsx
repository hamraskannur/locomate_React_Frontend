import React,{ useState, useEffect } from "react";
import { getAllPosts } from "../../../Api/userApi/postRequest";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../../redux/loadingBar";  
import { AddPostActions } from '../../../redux/AddPost'
import { useNavigate } from "react-router-dom";

const Post = () => {

  const [posts, setPosts] = useState([]);
  const userId = useSelector((state) => state?.user?.user?._id);
 const navigate=useNavigate()
  const dispatch = useDispatch()
  let newPost;
  const update = useSelector((state) => state.addPost.AddPost); 
  useEffect(() => {
    dispatch(showLoading());
    const getPost = async () => {
      try{

        newPost = await getAllPosts();
        newPost = newPost?.reverse();
        setPosts(newPost);
      }catch(error){
        navigate('*');
      }
      
    };
    getPost();
    dispatch(hideLoading());
      dispatch(AddPostActions.Update())
  }, [update===true]);

  return (
    <>
    <div className="bg-[#F3F3F6] mb-10 ">
      
      {posts.length>0 &&  posts.map((post) => (
        <>
       {(post?.userId?.public || post?.userId?.Followers.includes(userId)  ) && post.status && <Posts post={post} key={post?._id} onePost={false} />}
       </>

        ))}
    </div>
        </> 
  );
};

export default Post;
