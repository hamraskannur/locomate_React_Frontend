import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUserAllShorts } from "../../../Api/adminApi/PostRequest";
import Shorts from "../Shorts/Shorts";

const GetAllShorts = ({userId}) => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const getPost = async () => {
      if (userId) {
       const {AllPosts} = await getUserAllShorts(userId);
       
        setPosts(AllPosts);
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
