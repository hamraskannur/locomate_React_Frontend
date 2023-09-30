import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserAllShorts } from "../../../Api/adminApi/PostRequest";
import Shorts from "../Shorts/Shorts";

const GetAllShorts = ({userId}) => {
  const [posts, setPosts] = useState();
  const navigate=useNavigate()
  useEffect(() => {
    const getPost = async () => {
      if (userId) {
        try{
          const {AllPosts} = await getUserAllShorts(userId);
          console.log(AllPosts)
           setPosts(AllPosts);
        }catch(error){
          navigate('/admin/*');
        }
      }
    };
    getPost();
  }, [userId]);
  return (
    <>
      {posts?.map((post) => (
        <Shorts post={post} onePost={true} />
      ))}
    </>
  );
};

export default GetAllShorts;
