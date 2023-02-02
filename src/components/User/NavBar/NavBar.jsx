import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import AddPost from "../UploadPhoto/UploadPhoto";
import { useSelector } from "react-redux";
import UploadShorts from "../UploadShorts/UploadShorts";

function NavBar() {
  const [showModal, setShowModal] = useState(false);   
  const [addPost,setAddPost]=useState(false)
  const [shortsModal, setShortsModal] = useState(false);
  const user = useSelector((state) => state?.user?.user);

  return (
    <div className="z-50 flex justify-between bg-heavy-metal-800 shadow-md w-full bg-slate-700 h-16 shadow-heavy-metal-400 p-4 top-0 sticky">
      <h2 className="ml-5 font-bold text-white text-2xl cursor-pointer">
        GatherUnite
      </h2>
      <div className="flex gap-4  items-center">
        <Link to="/myAccount">
          <div className="flex ">
            <div className=" w-8 rounded-full border-white border overflow-hidden shadow-sm shadow-gray-500">
              <img
                src={user?.ProfileImg?user?.ProfileImg:"https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971fsrzol.jpg "}
                alt="avatars"
              />
            </div>
            <div className="">
              <h1 className=" max-sm:hidden max-md:hidden max-lg:hidden mt-2 ml-1  text-white ">
                {user.username}
              </h1>
            </div>
          </div>
        </Link>
        <div  onClick={()=>{setAddPost(!addPost)}}>
          <h1  className="hidden max-sm:inline-block max-md:inline-block max-lg:inline-block text-white ml-0">
            {React.createElement(BsFillPlusSquareFill, { size: "25" })}
          </h1>
        </div>
        <Link to='/settings' >
          <h1  className="hidden max-sm:inline-block max-md:inline-block max-lg:inline-block text-white ml-0">
            {React.createElement(FiSettings, { size: "25" })}
          </h1>
        </Link>

        {addPost &&<div className=" w-40 mr-2  ml-auto mt-14 border-2 h-20 bg-white fixed overflow-x-hidden overflow-y-auto  inset-0 z-50 outline-none focus:outline-none">
            <div onClick={() => setShowModal(!showModal)} className="group flex items-center justify-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md">
            <h1 >Upload Photo</h1>
            </div>
            <div className="group flex items-center justify-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md">
            <h1 >Upload Shorts</h1>
            </div>
        </div>}
       {showModal && <AddPost AddPost={showModal} setAddPost={setShowModal} />}
       {shortsModal &&  <UploadShorts setShortsModal={setShortsModal}/>}

      </div>
    </div>
  );
}

export default NavBar;
