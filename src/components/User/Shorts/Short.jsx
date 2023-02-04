import React,{ useState, useEffect } from "react";
import Shorts from "./Shorts";
import {  useDispatch, useSelector } from "react-redux";
import { getAllVideo } from "../../../Api/userApi/videoRequest";
import { hideLoading, showLoading } from "../../../redux/loadingBar";  

const GetShorts = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.user?.user?._id);
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
       { (post?.userId?.public || post?.userId?.Followers.includes(userId)  ) && post.status && <Shorts post={post} key={post?._id} onePost={false} />}
       </>

        ))}
        </>
  );
};

export default GetShorts;
