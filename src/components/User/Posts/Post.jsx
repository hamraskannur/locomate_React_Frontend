import useSWR from "swr";
import React,{ useState, useEffect } from "react";
import { getAllPosts } from "../../../Api/userApi/postRequest";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { startLoading,completedLoading } from '../../../redux/topLoadingBar'
import LoadingBar from 'react-top-loading-bar'

const Post = () => {
  const [posts, setPosts] = useState([]);
  const { progress } = useSelector((state) => state.loader);

  const dispatch = useDispatch()
  let newPost;
  const update = useSelector((state) => state.addPost.AddPost); 
  useEffect(() => {
    const getPost = async () => {
      dispatch(startLoading())
      newPost = await getAllPosts();
      newPost = newPost?.reverse();
      setPosts(newPost);
      dispatch(completedLoading())

    };
    getPost();
  }, [update]);

  return (
    <>
   {progress===100 ? <div>
      {posts.map((post) => (
        <Posts post={post} key={post?._id} onePost={false} />
        ))}
    </div>:<LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        loaderSpeed={1000}
      />}
        </>
  );
};

export default Post;
