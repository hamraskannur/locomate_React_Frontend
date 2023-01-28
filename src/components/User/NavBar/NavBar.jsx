import React, { useState } from "react";
import Link from "next/link";
import { BsFillPlusSquareFill } from "react-icons/bs";
import AddPost from "../AddPost/AddPost";
import { useSelector } from "react-redux";

function NavBar() {
  const [showModal, setShowModal] = useState(false);             
  const user = useSelector((state) => state?.user?.user);

  return (
    <div className="z-50 flex justify-between bg-heavy-metal-800 shadow-md w-full bg-slate-700 h-16 shadow-heavy-metal-400 p-4 top-0 sticky">
      <h2 className="ml-5 font-bold text-white text-2xl cursor-pointer">
        GatherUnite
      </h2>
      <div className="flex gap-4  items-center">
        <Link href="/user/myAccount">
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
        <div  onClick={() => setShowModal(!showModal)}>
          <h1  className="hidden max-sm:inline-block max-md:inline-block max-lg:inline-block text-white ml-0">
            {React.createElement(BsFillPlusSquareFill, { size: "25" })}
          </h1>
        </div>
        <AddPost AddPost={showModal} setAddPost={setShowModal} />

      </div>
    </div>
  );
}

export default NavBar;
