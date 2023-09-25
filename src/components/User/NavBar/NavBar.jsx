import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import AddPost from "../UploadPhoto/UploadPhoto";
import { useSelector } from "react-redux";
import UploadShorts from "../UploadShorts/UploadShorts";
import OutsideClickHandler from "react-outside-click-handler";
import Avatars from "../avatar/Avatar";

function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [shortsModal, setShortsModal] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const user = useSelector((state) => state?.user?.user);

  return (
    <div className="z-50 flex justify-between bg-heavy-metal-800 shadow-md w-full bg-slate-700 h-16 shadow-heavy-metal-400 p-4 top-0 sticky">
      <Link to="/">
        <h2 className="ml-5 font-bold text-white text-2xl max-sm:text-xl cursor-pointer">
          Locomate
        </h2>
      </Link>
      <div className=" flex gap-3  items-center">
        <Link to="/myAccount">
          <div className="flex ">
            <div className="  rounded-full border-white border overflow-hidden shadow-sm shadow-gray-500">
              <Avatars img={user?.ProfileImg}/>
            </div>
            <div className="">
              <h1 className="ml-2 max-sm:hidden max-md:hidden max-lg:hidden mt-2   text-white ">
                {user?.username}
              </h1>
            </div>
          </div>
        </Link>
        <div
          onClick={() => {
            setAddPost(!addPost);
          }}
        >
          <h1 className="hidden max-sm:inline-block   text-white ml-0">
            {React.createElement(BsFillPlusSquareFill, { size: "25" })}
          </h1>
        </div>
        <div onClick={() => setShowToggle(!showToggle)}>
          <h1 className="hidden max-sm:inline-block   text-white ml-0">
            {React.createElement(FaBars, { size: "25" })}
          </h1>
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setShowToggle(false);
          }}
        >
          {showToggle && (
            <div className=" w-40 mr-2 rounded-md  ml-auto mt-14 border-2 h-24 bg-white fixed overflow-x-hidden overflow-y-auto  inset-0 z-50 outline-none focus:outline-none">
              <Link
                to="/settings"
                className="group flex items-center ml-2 text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
              >
                <h1 className="hidden max-sm:inline-block max-md:inline-block max-lg:inline-block text-black ml-0">
                  {React.createElement(FiSettings, { size: "25" })}
                </h1>
                <h1>Settings</h1>
              </Link>
              <Link
                to="/search"
                className="group flex items-center ml-2 text-sm gap-3.5  font-medium p-2  hover:bg-[#bbc0c7]  rounded-md"
              >
                <h1 className="hidden max-sm:inline-block  max-md:inline-block max-lg:inline-block text-black ml-0">
                  {React.createElement(BiSearch, { size: "25" })}
                </h1>
                <h1>search</h1>
              </Link>
            </div>
          )}
        </OutsideClickHandler>
        <OutsideClickHandler
          onOutsideClick={() => {
            setAddPost(false);
          }}
        >
        {addPost && (
          <div className=" w-40 mr-2  ml-auto mt-14 border-2 h-20 bg-white fixed overflow-x-hidden overflow-y-auto  inset-0 z-50 outline-none focus:outline-none">
            <div
              onClick={() => setShowModal(!showModal)}
              className="group flex items-center justify-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
            >
              <h1>Upload Photo</h1>
            </div>
            <div
              onClick={() => setShortsModal(!shortsModal)}
              className="group flex items-center justify-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
            >
              <h1>Upload Shorts</h1>
            </div>
          </div>
        )}
        </OutsideClickHandler>
        {showModal && <AddPost AddPost={showModal} setAddPost={setShowModal} />}
        {shortsModal && <UploadShorts setShortsModal={setShortsModal} />}
      </div>
    </div>
  );
}

export default NavBar;
