import React, { useState } from "react";
import {BiLogOut, BiHomeAlt, BiMessageSquareDetail, BiVideo } from "react-icons/bi";
import { DiGitPullRequest } from "react-icons/di";
import { Link } from "react-router-dom";
import { MdOutlineNotifications, MdSlowMotionVideo } from "react-icons/md";  
import { useNavigate } from 'react-router-dom'
import {userActions} from '../../../redux/userAuth'
import { useDispatch } from "react-redux";


const BottomBar = () => {
  const navigate = useNavigate()  
  const dispatch =useDispatch()

  const menus = [
    { name: "Home", link: "/", icon: BiHomeAlt },
    { name: "shorts", link: "/shorts", icon:MdSlowMotionVideo  },
    { name: "Messages", link: "/messages", icon: BiMessageSquareDetail },  
    { name: "settings", link: "/notifications", icon:  MdOutlineNotifications},
  ];
 
  return (
    <>
    <div className="border-t-2 flex px-4 py-2 justify-between border-slate-700 bg-white bottom-0 h-14 fixed w-full">
        {menus.map((menu)=>(
            <Link
            to={`${menu?.link}`}
            key={menu?.name}
            >
            <div className="hover:bg-[#bbc0c7] rounded-md p-2">{React.createElement(menu?.icon, { size: "20" })}</div>
            </Link>
        ))}

            <Link
            to="/friends"
            >
            <div  className="hover:bg-[#bbc0c7] rounded-md p-2">{React.createElement(DiGitPullRequest, { size: "20" })}</div>
            </Link>
          
            {/* <div   onClick={() => logOut()} className="hover:bg-[#bbc0c7] rounded-md p-2">{React.createElement(BiLogOut, { size: "20" })}</div> */}

    </div>

    </>
  );
};

export default BottomBar;
