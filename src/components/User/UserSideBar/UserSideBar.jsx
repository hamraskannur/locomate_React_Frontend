import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  BiLogOut,
  BiHomeAlt,
  BiMessageSquareDetail,
  BiPhotoAlbum,
  BiSearch,
} from "react-icons/bi";
import { MdOutlineNotifications, MdSlowMotionVideo } from "react-icons/md";

import { AiOutlineSave } from "react-icons/ai";
import { DiGitPullRequest } from "react-icons/di";
import { Link, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { sideBarAction } from "../../../redux/sideBar";
import AddPost from "../UploadPhoto/UploadPhoto";
import { userActions } from "../../../redux/userAuth";
import UploadShorts from "../UploadShorts/UploadShorts";

const UserSideBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [shortsModal, setShortsModal] = useState(false);
  const [userPublic, setUserPublic] = useState(false);
  const [count, setCount] = useState(0);
  const [addPost, setAddPost] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newNotification = useSelector((state) => state?.user?.user.read);
  const notificationSchedule =useSelector((state)=>state.notification.notificationChange)
 const [notification,setNotification]=useState(newNotification)
 useEffect(()=>{
 if(notificationSchedule){
  setNotification(false)
 }
 },[notificationSchedule])
  const menus = [
    { name: "Home", link: "/", icon: BiHomeAlt },
    { name: "search", link: "/search", icon: BiSearch },
    { name: "Messages", link: "/messages", icon: BiMessageSquareDetail }, 
    { name: "shorts", link: "/shorts", icon: MdSlowMotionVideo },
    { name: "settings", link: "/settings", icon: FiSettings },
  ];
  const user = useSelector((state) => state?.user?.user);
  useEffect(() => {
    setUserPublic(user?.public);
    setCount(user?.Requests?.length);
  }, []);

  const sideBar = useSelector((state) => state?.sideBar?.sideBar);
  const logOut = (e) => {
    localStorage.clear();
    dispatch(userActions.userLogout());
    navigate("/login");
    
  };

  return (
    <>
      <div className="h-full sticky top-16  ">
        <div className="hidden md:inline-block border-r-4 border-slate-700 ">
          <div
            className={`bg-white h-[91vh]  ${
              sideBar ? "w-72" : "w-16"
            } duration-500   text-black px-4  `}
          >
            <div className="py-3 flex justify-end">
              <HiMenuAlt3
                size={26}
                className="cursor-pointer"
                onClick={() => dispatch(sideBarAction.changeSideBar())}
              />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
              {menus?.map((menu, i) => (
                <Link
                  key={menu?.name}
                  to={`${menu?.link}`}
                  className={`${
                    window.location.pathname === menu?.link
                      ? "bg-[#bbc0c7] "
                      : ""
                  } group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    style={{ transitionDelay: `${i + 3}00ms` }}
                    className={`whitespace-pre duration-500 ${
                      !sideBar && "opacity-0 translate-x-6  overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      sideBar && "hidden"
                    } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
                  rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
                   group-hover:w-fit`}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </div>

            {!userPublic && (
              <div className="mt-4 flex flex-col gap-4 relative">
                <Link
                  to="/friends"
                  className={`${
                    window.location.pathname === "/Friends"
                      ? "bg-[#bbc0c7] "
                      : ""
                  } group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md`}
                >
                  <div>
                    {React.createElement(DiGitPullRequest, { size: "20" })}
                    {!sideBar && count > 0 && (
                      <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                        {count}
                      </span>
                    )}
                  </div>
                  <h2
                    style={{ transitionDelay: "1000ms" }}
                    className={`whitespace-pre duration-500 ${
                      !sideBar && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    Request
                    {count > 0 && (
                      <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                        {count}
                      </span>
                    )}
                  </h2>
                  <h2
                    className={`${
                      sideBar && "hidden"
                    } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
           rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
           group-hover:w-fit`}
                  >
                    Request
                  </h2>
                </Link>
              </div>
            )}

            <div className="mt-4 flex flex-col gap-4 relative cursor-pointer">
              <Link
                to="/notifications"
                className={`${
                  window.location.pathname === "/notifications"
                    ? "bg-[#bbc0c7] "
                    : ""
                } group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md`}
              >
                <div>
                  {React.createElement(MdOutlineNotifications, { size: "20" })}
                  {!sideBar && count > 0 && (
                    <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      {count}
                    </span>
                  )}
                </div>
                <h2
                  style={{ transitionDelay: "1000ms" }}
                  className={`whitespace-pre duration-500 ${
                    !sideBar && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Notifications
                  {notification && (
                    <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      new
                    </span>
                  )}
                </h2>
                <h2
                  className={`${
                    sideBar && "hidden"
                  } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
           rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
           group-hover:w-fit`}
                >
                  Notifications{" "}
                  {notification && (
                    <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      new
                    </span>
                  )}
                </h2>
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-4 relative">
              <button
                type="button"
                onClick={() => setAddPost(!addPost)}
                className="group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
              >
                <div>{React.createElement(AiOutlineSave, { size: "20" })}</div>
                <h2
                  style={{ transitionDelay: "1100ms" }}
                  className={`whitespace-pre duration-500 ${
                    !sideBar && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Upload Post
                </h2>
                <h2
                  className={`${
                    sideBar && "hidden"
                  } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
           rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
           group-hover:w-fit`}
                >
                  Upload Post
                </h2>
              </button>

              {addPost && (
                <>
                  <button
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                    className="group flex items-center text-sm gap-3.5   font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
                  >
                    <div>
                      {React.createElement(BiPhotoAlbum, { size: "20" })}
                    </div>
                    <h2
                      style={{ transitionDelay: "1100ms" }}
                      className={`whitespace-pre duration-500 ${
                        !sideBar && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Upload Photo
                    </h2>
                    <h2
                      className={`${
                        sideBar && "hidden"
                      } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
           rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
           group-hover:w-fit`}
                    >
                      Upload Photo
                    </h2>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShortsModal(!showModal)}
                    className="group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
                  >
                    <div>
                      {React.createElement(MdSlowMotionVideo, { size: "20" })}
                    </div>
                    <h2
                      style={{ transitionDelay: "1100ms" }}
                      className={`whitespace-pre duration-500 ${
                        !sideBar && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      Upload Shorts
                    </h2>
                    <h2
                      className={`${
                        sideBar && "hidden"
                      } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
           rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
           group-hover:w-fit`}
                    >
                      Upload Shorts
                    </h2>
                  </button>
                </>
              )}
            </div>

            <div
              onClick={() => logOut()}
              className="mt-4 flex flex-col gap-4 relative"
            >
              <button
                type="button"
                className="group flex items-center text-sm  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
              >
                <div>{React.createElement(BiLogOut, { size: "20" })}</div>
                <h2
                  style={{ transitionDelay: "1200ms" }}
                  className={`whitespace-pre duration-500 ${
                    !sideBar && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  Log out
                </h2>
                <h2
                  className={`${
                    sideBar && "hidden"
                  } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
               rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
                group-hover:w-fit`}
                >
                  Log out
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
        {showModal && <AddPost setAddPost={setShowModal} />}
        {shortsModal && <UploadShorts setShortsModal={setShortsModal} />}
    </>
  );
};

export default UserSideBar;
