import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsFillPeopleFill } from "react-icons/bs";
import AllPost from "./AllPost";
import PrivatePage from "./PrivatePage";
import { followUser } from "../../../Api/userApi/followRequest";
import { createChat } from "../../../Api/userApi/chatRequest";
import ShowUser from "../ShowUser/ShowUser";
import Post from "../Posts/Posts";
import { useNavigate } from "react-router-dom";
import Shorts from "./Shorts";

const ProfilePage = ({ userData, type }) => {
  const userId = useSelector((state) => state?.user?.user?._id);
  const navigate = useNavigate();
  const [PostCount, setPostCount] = useState(0);
  const [selectOption, setSelectOption] = useState("post");
  const [follow, setFollow] = useState(userData?.Followers.includes(userId));
  const [Requested, setRequested] = useState(
    userData?.Requests.includes(userId)
  );
  const [onePostId, setOnePostId] = useState(null);

  const [followersCount, setFollowersCount] = useState(
    userData?.Followers?.length
  );
  const [followingCount, setFollowingCount] = useState(
    userData?.Following?.length
  );

  const editUser = () => {
    navigate("/editProfile");
  };
  const followUserHandler = async (followId) => {
    try {
      const response = await followUser({ followId });
      if (response.success) {
        if (!userData?.public) {
          if (follow) {
            setFollowersCount(followersCount - 1);
            setFollow(false);
          } else {
            if (Requested) {
              setRequested(false);
            } else {
              setRequested(true);
            }
          }
        } else {
          if (follow) {
            setFollowersCount(followersCount - 1);
            setFollow(false);
          } else {
            setFollowersCount(followersCount + 1);
            setFollow(true);
          }
        }
      } else {
      }
    } catch (error) {
      navigate("*");
    }
  };

  const createMessage = async (senderId) => {
    try {
      const response = await createChat({ senderId, receiverId: userId });
      navigate("/Messages");
    } catch (error) {
      navigate("*");
    }
  };
  const openPost = () => {
    setOnePostId(null);
    setSelectOption("post");
  };
  const openShorts = () => {
    setOnePostId(null);
    setSelectOption("shorts");
  };
  const clickFollowers = () => {
    setOnePostId(null);
    setSelectOption("Followers");
  };
  const clickFollowing = () => {
    setOnePostId(null);
    setSelectOption("Following");
  };
  const clickSavePost = () => {
    setOnePostId(null);
    setSelectOption("SavedPost");
  };
  return (
    <div
      className=" bg-white  shadow:lg
   shadow-gray-300 rounded-md p-4 mb-5  md:m-4 mt-6 "
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
          <div className="flex justify-end mr-5">
            {type && (
              <button
                onClick={editUser}
                className="ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-4 rounded-l"
              >
                edit
              </button>
            )}
          </div>

          <div className="flex">
            {!type && !follow && !Requested && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-700 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                follow
              </button>
            )}
            {!type && follow && !Requested && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-700 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                UnFollow
              </button>
            )}
            {!type && Requested && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-500 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                Requested
              </button>
            )}
            {!type && (
              <button
                onClick={() => createMessage(userData?._id)}
                className=" ml-5 flex justify-between bg-slate-700 hover:bg-gray-400 text-white font-bold py-1  px-4 rounded-l"
              >
                Message
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex  mt-2  justify-center">
        {(userData?.public || type || follow) && (
          <span
            onClick={openPost}
            className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300"
          >
            <div className="flex justify-center">
              <p className="text-lg font-bold text-center ml-3">{PostCount}</p>
            </div>
            <p className="text-center">Posts</p>
          </span>
        )}
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
        {(userData?.public || type || follow) && (
          <>
            <div className="flex">
              <div
                onClick={openPost}
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
            <div
              onClick={clickSavePost}
              className="ml-14 cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110"
            >
              <h1>Saved post</h1>
            </div>
          </>
        )}
      </div>
      {(userData?.public || type || follow) &&
        !onePostId &&
        selectOption === "post" && (
          <div className="mt-5">
            <AllPost
              userId={userData?._id}
              type={type}
              SavedPost={false}
              postCount={setPostCount}
              setOnePostId={setOnePostId}
            />
          </div>
        )}
      {(userData?.public || type || follow) &&
        !onePostId &&
        selectOption === "SavedPost" && (
          <div className="mt-5">
            <AllPost
              userId={userData?._id}
              SavedPost={true}
              type={type}
              postCount={setPostCount}
              setOnePostId={setOnePostId}
            />
          </div>
        )}

      {(userData?.public || type || follow) && onePostId && (
        <div className="mt-5">
          <Post
            onePost={true}
            post={onePostId}
            SavedPost={true}
            type={type}
            postCount={setPostCount}
            setOnePostId={setOnePostId}
          />
        </div>
      )}
      {(userData?.public || type || follow) &&
        !onePostId &&
        selectOption === "shorts" && (
          <div className="mt-5">
            <AllPost
              postCount={setPostCount}
              setOnePostId={setOnePostId}
              userId={userData?._id}
              shorts={true}
            />
          </div>
        )}

      {(userData?.public || type || follow) &&
        selectOption != "post" &&
        selectOption != "shorts" &&
        !onePostId &&
        selectOption != "SavedPost" && (
          <div className="mt-5">
            <ShowUser userId={userData?._id} type={selectOption} />
          </div>
        )}

      {!userData?.public && !type && !follow && (
        <div className="shadow-md shadow-gray-400">
          <PrivatePage />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
