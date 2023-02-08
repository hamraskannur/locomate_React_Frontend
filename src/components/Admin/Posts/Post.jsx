import React,{ useState, useEffect } from "react";
import { getAllPosts } from "../../../Api/userApi/postRequest";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { startLoading,completedLoading } from '../../../redux/topLoadingBar'
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()  

  const dispatch = useDispatch()
  let newPost;
  const update = useSelector((state) => state.addPost.AddPost); 
  useEffect(() => {
    const getPost = async () => {
      try{

        dispatch(startLoading())
        newPost = await getAllPosts();
        newPost = newPost?.reverse();
        setPosts(newPost);
        dispatch(completedLoading())
      }catch(error){
        navigate('/admin/*');
      }
    };
    getPost();
  }, [update]);

  return (
    <>
  <div>
      {posts.length>0 && posts?.map((post) => (
        <Posts post={post} key={post?._id} onePost={false} />
        ))}
    </div>
        </>
  );
};

export default Post;
