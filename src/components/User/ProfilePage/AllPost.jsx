import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSavedPost, getUserAllPost } from "../../../Api/userApi/postRequest";
import { getUserAllShorts } from "../../../Api/userApi/videoRequest";

const AllPost = ({ userId, type, postCount, SavedPost, setOnePostId,shorts }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  let newPost;
  useEffect(() => {      
      (async()=>{
        if(shorts){
          const shorts = await getUserAllShorts(userId)
          setPosts(shorts);
        }else if (SavedPost) {
          const response = await getSavedPost(userId);
          setPosts(response);
        } else {
          if (userId) {
            newPost = await getUserAllPost(userId);
            setPosts(newPost);
            postCount(newPost.length);
          }
        }
      })()
  }, [userId]);

  const getSavedOnePost = (post, postUser) => {
    post.userId = postUser;
    setOnePostId(post);
  };
  const getOnePost = (post) => {
    setOnePostId(post);
  };
  return (
    <>
      <hr />
      <div className="grid grid-cols-3 gap-3 mt-5 ">
        {posts?.map((post) => (
          <div
            key={post._id}
            onClick={() => {
              SavedPost
                ? getSavedOnePost(post?.post, post?.userId)
                : getOnePost(post);
            }}
          >
            {(SavedPost ? post?.post?.img[0] : post?.img[0]) ? (
              <img
                className="rounded-md overflow-hidden h-48 flex items-center object-cover"
                src={SavedPost ? post?.post?.img[0] : post?.img[0]}
                alt="posts"
              />
            ) : (
              <video
                class="rounded-md overflow-hidden h-48 flex items-center object-cover"
                onClick={() => {
                  SavedPost
                    ? getSavedOnePost(post?.post, post?.userId)
                    : getOnePost(post);
                }}
                width="400"
                controls
              >
                <source src={SavedPost ? post?.post?.shorts : post?.shorts} />
              </video>
            )}
          </div>
        ))}
      </div>

      {posts.length === 0 && type && !SavedPost && (
        <div className="">
          <div className="flex justify-center  bg-white">
            <img
              className="bg-white h-28"
              src="https://freepngimg.com/thumb/photography/59850-and-instagram-photography-black-logo-white.png  "
              alt="img"
            />
          </div>
          <div className="flex justify-center">
            <h1 className="not-italic">share your {shorts?"shorts":"post"}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default AllPost;
