import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  getUserAllPost } from "../../../Api/adminApi/PostRequest";

const AllPost = ({ userId, type, postCount,setOnePostId }) => {
  const [posts, setPosts] = useState([]);
  const navigate=useNavigate()
  let newPost;
  useEffect(() => {
    const getPost = async () => {
        if (userId) {
          try{
            newPost = await getUserAllPost(userId);
            setPosts(newPost);
            postCount(newPost.length);
          }catch(error){
            navigate('/admin/*');
          }
        }
    };
    getPost();
  }, [userId]);
  

  const getOnePost = (post) => {
    setOnePostId(post )

  };
  return (
    <>
      <hr />
      <div className="grid grid-cols-3 gap-3 mt-5 ">
        {posts?.map((post) => (
          <div key={post._id}  onClick={() => getOnePost(post)}>
            <img
              className="rounded-md overflow-hidden h-48 flex items-center object-cover"
              // src={SavedPost?post.post.img[0]:post?.img[0]}
              src="https://freepngimg.com/thumb/photography/59850-and-instagram-photography-black-logo-white.png  "
              alt="posts"
            />
          </div>
        ))}
      </div>

      {posts.length === 0  && type && (
        <div className="">
          <div className="flex justify-center  bg-white">
            <img
              className="bg-white h-28"
              src="https://freepngimg.com/thumb/photography/59850-and-instagram-photography-black-logo-white.png  "
              alt="img"
            />
          </div>
          <div className="flex justify-center">
            <h1 className="not-italic">share your post</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default AllPost;
