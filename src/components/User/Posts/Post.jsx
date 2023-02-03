import React,{ useState, useEffect } from "react";
import { getAllPosts } from "../../../Api/userApi/postRequest";
import Posts from "./Posts";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../../redux/loadingBar";  

const Post = () => {

  const [posts, setPosts] = useState([]);
  const { progress } = useSelector((state) => state.loader);

  const dispatch = useDispatch()
  let newPost;
  const update = useSelector((state) => state.addPost.AddPost); 
  useEffect(() => {
    dispatch(showLoading());
    const getPost = async () => {
      newPost = await getAllPosts();
      newPost = newPost?.reverse();
      setPosts(newPost);
      
    };
    getPost();
    dispatch(hideLoading());
  }, [update]);

  return (
    <>
    <div className="bg-[#F3F3F6] ">
      
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
