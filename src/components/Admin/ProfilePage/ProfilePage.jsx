import React, { useState } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import AllPost from "./AllPost";
import ShowUser from "../ShowUser/ShowUser";
import Post from "../Posts/Posts"
import Shorts from './GetAllShorts'

const ProfilePage = ({ userData, type }) => {
  const [PostCount, setPostCount] = useState(0);
  const [selectOption, setSelectOption] = useState("post");
 
  const [onePostId,setOnePostId]=useState(null)

  const [followersCount,setFollowersCount]=useState(userData?.Followers?.length)
  const [followingCount,setFollowingCount]=useState(userData?.Following?.length)

  const openPost=()=>{
    setOnePostId(null)
    setSelectOption("post")
  }
  const clickFollowers =()=>{
    setOnePostId(null)
    setSelectOption("Followers");
  }
  const clickFollowing = () =>{
    setOnePostId(null) 
     setSelectOption("Following");
  }
  const openShorts=()=>{
    setOnePostId(null)
    setSelectOption("shorts")
  }
  return (
    <div
      className=" bg-white  shadow:lg
   shadow-gray-300 rounded-md p-4 mb-5  m-4 mt-6 "
    >
      <div className=" ">
        <div className="relative ">
          <div className="h-40 w-full overflow-hidden flex rounded-md justify-center items-center">
            <img
              src={
                userData?.coverImg
                  ? userData.coverImg
                  : "https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971fsrzol.jpg"
              }
              alt="cover"
            />
          </div>
          <div className="absolute top-14 left-4">
            <div className="w-36 h-36 rounded-full overflow-hidden shadow-sm shadow-gray-500">
              <img
                className="bg-white"
                src={
                  userData?.ProfileImg
                    ? userData?.ProfileImg
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                }
                alt="avatars"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-heavy-metal-800 ">
            {userData?.username ? userData.username : ""}
          </h2>
          <div className="text-heavy-metal-500 leading-4 mt-2">
            {userData?.name ? userData.name : ""},
          </div>
          <div className="text-heavy-metal-500 leading-4 mt-1">
            {userData?.city ? userData.city : "place"},
            {userData?.country ? userData.country : "country"}
          </div>
          <p className="my-2   max-w-6xl text-sm">
            {userData?.description ? userData?.description : ""}
          </p>
         

         
        </div>
      </div>
      <div className="flex  mt-2  justify-center">
          <span
            onClick={openPost}
            className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300"
          >
            <div className="flex justify-center">
              <p className="text-lg font-bold text-center ml-3">{PostCount}</p>
            </div>
            <p className="text-center">Posts</p>
          </span>
        <span
          onClick={clickFollowers}
          className="ml-2 bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300"
        >
          <div className="flex ">
            <div className="text-lg font-bold text-center mt-1">
              {React.createElement(BsFillPeopleFill, { size: "20" })}
            </div>
            <p className="text-lg font-bold text-center ml-3">
              {followersCount}
            </p>
          </div>
          <p className="text-center">Followers</p>
        </span>
        <span
          onClick={clickFollowing}
          className="ml-2 bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300"
        >
          <div className="flex ">
            <div className="text-lg font-bold text-center mt-1">
              {React.createElement(BsFillPeopleFill, { size: "20" })}
            </div>
            <p className="text-lg font-bold text-center ml-3">
              {followingCount}
            </p>
          </div>
          <p className="text-center">Following</p>
        </span>
      </div>

      <div className="flex items-center justify-center mt-5">
          <>
          <div className="flex">
              <div onClick={openPost}
                className="cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110"
              >
                <h1>Post</h1>
              </div>
            </div>
            <div
              onClick={openShorts}
              className="ml-14 cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110"
            >
              <h1>Shorts</h1>
            </div>
          
        
          </>
      </div>
      { !onePostId &&  selectOption === "post" && (
        <div className="mt-5">
          <AllPost
            userId={userData?._id}
            type={type}
            postCount={setPostCount}
            setOnePostId={setOnePostId}
          />
        </div>
      )}
       { selectOption === "shorts" && (
        <div className="mt-5">
          <Shorts
          userId={userData?._id}
           onePost={true}
            post={onePostId}
           
          />
        </div>
      )}
          
         { onePostId && (
        <div className="mt-5 w-full">
          <Post
           onePost={true}
            post={onePostId}
           
          />
        </div>
      )}
   {selectOption != "post" && selectOption != "shorts" && !onePostId  && (
        <div className="mt-5">
          <ShowUser  userId={userData?._id} type={selectOption} />
        </div>
      )}

      {selectOption != "post" && !onePostId && selectOption != "SavedPost" && selectOption === !"shorts" && (
        <div className="mt-5">
          <ShowUser userId={userData?._id} type={selectOption} />
        </div>
      )}

     
    </div>
  );
};

export default ProfilePage;
