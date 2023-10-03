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
  const [Requested, setRequested] = useState(userData?.Requests.includes(userId));
  const [onePostId, setOnePostId] = useState(null);
  const [followersCount, setFollowersCount] = useState(userData?.Followers?.length);
  const [followingCount, setFollowingCount] = useState(userData?.Following?.length);
  const [followLoading, setFollowLoading] = useState(false);
  const [messageLoading, setMessageLoading] = useState(false);



  const editUser = () => {
    navigate("/editProfile");
  };
  const followUserHandler = async (followId) => {
    try {
      setFollowLoading(true)
      const response = await followUser({ followId });
      setFollowLoading(false)
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
      setMessageLoading(true)
      const response = await createChat({ senderId, receiverId: userId });
      setMessageLoading(false)
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
          <div className="text-heavy-metal-500 leading-4 mt-2">
            {userData?.email ? userData.email : ""},
          </div>
          <div className="text-heavy-metal-500 leading-4 mt-1">
            {userData?.city ? userData.city : ""},
            {userData?.country ? userData.country : ""}
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
            {!type &&!followLoading && !follow && !Requested && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-700 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                follow
              </button>
            )}
            {!type &&!followLoading && follow && !Requested && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-700 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                UnFollow
              </button>
            )}
            {!type && !followLoading &&Requested && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-500 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                Requested
              </button>
            )}
             {followLoading && (
                    <button
                      type="button"
                      className="flex justify-between ml-2 font-bold py-1 rounded bg-slate-700 hover:bg-slate-600 text-white px-6 pb-2 pt-2.5 text-xs uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mr-2 border border-gray-200  focus:z-10  focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="#1C64F2"
                        />
                      </svg>
                      Loading...
                    </button>
                  )}
            {!type && !messageLoading && (
              <button
                onClick={() => createMessage(userData?._id)}
                className=" ml-5 flex justify-between bg-slate-700 hover:bg-gray-400 text-white font-bold py-1  px-4 rounded-l"
              >
                Message
              </button>
            )}
            {messageLoading && (
                    <button
                      type="button"
                      className="flex justify-between ml-2 font-bold py-1 rounded bg-slate-700 hover:bg-slate-600 text-white px-6 pb-2 pt-2.5 text-xs uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] mr-2 border border-gray-200  focus:z-10  focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="#1C64F2"
                        />
                      </svg>
                      Loading...
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
