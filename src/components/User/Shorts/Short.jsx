import React,{ useState, useEffect } from "react";
import Shorts from "./Shorts";
import {  useDispatch, useSelector } from "react-redux";
import { getAllVideo } from "../../../Api/userApi/videoRequest";
import { hideLoading, showLoading } from "../../../redux/loadingBar";  

const GetShorts = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  const update = useSelector((state) => state.addPost.AddPost); 
  useEffect(() => {
    const getPost = async () => {
      let newPost = await getAllVideo();
      newPost = newPost?.reverse();
      setPosts(newPost);
    };
    getPost();
  }, [update===true]);

  return (
    <>
      {posts.map((post) => (
        <>
       {post.status && <Shorts post={post} key={post?._id} onePost={false} />}
       </>

        ))}
        </>
  );
};

export default GetShorts;
