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
    <div className="bg-[#F3F3F6] h-full">
      
      {posts.map((post) => (
        <>
       {post.status && <Posts post={post} key={post?._id} onePost={false} />}
       </>

        ))}
    </div>
        </> 
  );
};

export default Post;
