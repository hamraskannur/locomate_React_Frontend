import React,{ useState, useEffect } from "react";
import Shorts from "./Shorts";
import {  useDispatch, useSelector } from "react-redux";
import { getAllVideo } from "../../../Api/userApi/videoRequest";
import { hideLoading, showLoading } from "../../../redux/loadingBar";  
import { AddPostActions } from '../../../redux/AddPost'
import { useNavigate } from "react-router-dom";

const GetShorts = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const userId = useSelector((state) => state?.user?.user?._id);
  const update = useSelector((state) => state.addPost.AddPost); 
  useEffect(() => {
    const getPost = async () => {
      try{
        let newPost = await getAllVideo();
        newPost = newPost?.reverse();
        setPosts(newPost);
      
      }catch(error){
        navigate('*');
      }
    };
    getPost();
    dispatch(AddPostActions.Update())

  }, [update===true]);

  return (
    <div className="mb-10">

      {posts.map((post) => (
        <>
       { (post?.userId?.public || post?.userId?.Followers.includes(userId)  ) && post.status && <Shorts post={post} key={post?._id} onePost={false} />}
       </>

))}
</div>
  );
};

export default GetShorts;
