import React, { use, useState } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { BsFillPeopleFill } from "react-icons/bs";
import AllPost from "./AllPost";
import PrivatePage from "./privatePage";
import { followUser } from "../../../Api/userApi/followRequest";
import { createChat } from "../../../Api/userApi/chatRequest";
import { useRouter } from "next/router";
import ShowUser from "../ShowUser/ShowUser";
import Post from "../Posts/Posts"

const ProfilePage = ({ userData, type ,admin}) => {
  const userId = useSelector((state) => state?.user?.user?._id);
  const router = useRouter();
  const [PostCount, setPostCount] = useState(0);
  const [selectOption, setSelectOption] = useState("post");
  const [follow, setFollow] = useState(userData?.Followers.includes(userId));
  const [Requested, setRequested] = useState(userData?.Requests.includes(userId));
  const [onePostId,setOnePostId]=useState(null)

  const [followersCount,setFollowersCount]=useState(userData?.Followers?.length)
  const [followingCount,setFollowingCount]=useState(userData?.Following?.length)

  const editUser = () => {
    Router.push("/user/editProfile");
  };
  const followUserHandler = async (followId) => {
    const response = await followUser({ followId });
    if (response.success) {
      if (!userData?.public) {
        if (follow) {
          setFollowersCount(followersCount-1)
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
          setFollowersCount(followersCount-1)
          setFollow(false);
        } else {
          setFollowersCount(followersCount+1)
          setFollow(true);
        }
      }
    } else {
    }
  };

  const createMessage = async (senderId) => {
    const response = await createChat({ senderId, receiverId: userId });
    router.push("/user/Messages");
  };
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
          <div className="flex justify-end mr-5">
            {type && !admin && (
              <button
                onClick={editUser}
                className="ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-4 rounded-l"
              >
                edit
              </button>
            )}
          </div>

          <div className="flex">
            {!type && !follow && !Requested && !admin && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-700 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                follow
              </button>
            )}
            {!type && follow && !Requested && !admin && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-700 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                UnFollow
              </button>
            )}
            {!type && Requested && !admin && (
              <button
                onClick={() => followUserHandler(userData?._id)}
                className="flex justify-between bg-slate-500 hover:bg-slate-600 text-white font-bold py-1  px-4 rounded-l"
              >
                Requested
              </button>
            )}
            {!type && !admin && (
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
        {(userData?.public || type || follow || admin) && (
          <span
            onClick={() => {setOnePostId(null),setSelectOption("post")}}
            className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300"
          >
            <div className="flex justify-center">
              <p className="text-lg font-bold text-center ml-3">{PostCount}</p>
            </div>
            <p className="text-center">Posts</p>
          </span>
        )}
        <span
          onClick={() => {setOnePostId(null),setSelectOption("Followers");}}
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
          onClick={() => {setOnePostId(null), setSelectOption("Following");  }}
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
        {(userData?.public || type || admin) && (
          <>
            <div className="flex">
              <div onClick={() => {setOnePostId(null) ,setSelectOption("post")}}
                className="cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110"
              >
                <h1>Post</h1>
              </div>
            </div>
           {!admin && <div
              onClick={() =>{setOnePostId(null), setSelectOption("SavedPost")}}
              className="ml-14 cursor-pointer hover:bg-[#bbc0c7] rounded-md font-medium hover:scale-110"
            >
              <h1>Saved post</h1>
            </div>}
          </>
        )}
      </div>
      {(userData?.public || type || follow || admin) && !onePostId &&  selectOption === "post" && (
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
          {(userData?.public || type || follow || admin) && !onePostId && selectOption === "SavedPost" && (
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
         {(userData?.public || type || follow || admin) && onePostId && (
        <div className="mt-5">
          <Post
          admin={admin}
           onePost={true}
            post={onePostId}
            SavedPost={true}
            type={type}
            postCount={setPostCount}
            setOnePostId={setOnePostId}
          />
        </div>
      )}

      {(userData?.public || type || follow || admin) && selectOption != "post" && !onePostId && selectOption != "SavedPost" && (
        <div className="mt-5">
          <ShowUser admin={admin} userId={userData?._id} type={selectOption} />
        </div>
      )}

      {!userData?.public && !type && !follow && !admin && (
        <div className="shadow-md shadow-gray-400">
          <PrivatePage />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
