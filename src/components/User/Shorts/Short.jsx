import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllVideo } from "../../../Api/userApi/videoRequest";
import { AddPostActions } from "../../../redux/AddPost";
import Posts from "../Posts/Posts";

const GetShorts = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state?.user?.user?._id);
  const update = useSelector((state) => state.addPost.AddPost);
  useEffect(() => {
    (async () => {
      let newPost = await getAllVideo();
      newPost = newPost?.reverse();
      setPosts(newPost);
    })();
    dispatch(AddPostActions.Update());
  }, [update === true]);

  return (
    <div className="mb-10">
      {posts.map((post) => (
        <>
          {(post?.userId?.public || post?.userId?.Followers.includes(userId)) &&
            post.status && (
              <Posts post={post} key={post?._id} onePost={false} />
            )}
        </>
      ))}
    </div>
  );
};

export default GetShorts;
