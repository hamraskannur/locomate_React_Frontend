import React,{ useState, useEffect } from "react";
import Shorts from "./Shorts";
import { useDispatch, useSelector } from "react-redux";
import { startLoading,completedLoading } from '../../../redux/topLoadingBar'
import { getAllVideo } from "../../../Api/userApi/videoRequest";

const GetShorts = () => {
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch()
  let newPost;
  const update = useSelector((state) => state.addPost.AddPost); 
  useEffect(() => {
    const getPost = async () => {
      dispatch(startLoading())
      newPost = await getAllVideo();
      newPost = newPost?.reverse();
      setPosts(newPost);
      dispatch(completedLoading())

    };
    getPost();
  }, [update===true]);

  return (
    <>
      {posts.map((post) => (
        <>
       {post.status && <Shorts shorts={post} key={post?._id} onePost={false} />}
       </>

        ))}
        </>
  );
};

export default GetShorts;
