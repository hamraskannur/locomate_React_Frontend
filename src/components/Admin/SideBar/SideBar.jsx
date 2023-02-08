import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImUsers } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";
import { BsFillSignpostSplitFill } from "react-icons/bs";
import { MdReport, MdOutlineNotifications } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { checkNewNotification } from "../../../Api/adminApi/adminApi";
import { useSelector } from "react-redux";

function SideBar() {
  const notificationSchedule =useSelector((state)=>state.notification.notificationChange)
  const [newNotification,setNewNotification ]=useState(false) 
  const navigate = useNavigate();
  useEffect(()=>{
   const fetchData = async () => {
    try{
      const notification=await checkNewNotification()
      if(notification.status){
       setNewNotification(false)
      }else{
       setNewNotification(true)
      }

    }catch(error){
      navigate('/admin/*');
    }
   }
   fetchData()
  },[notificationSchedule])
  const menus = [
    { name: "Users", link: "/admin/", icon: ImUsers },
    { name: "report", link: "/admin/reportedPost", icon: MdReport },
    { name: "posts", link: "/admin/allPost", icon: BsFillSignpostSplitFill },

  ];

  const logOut = (e) => {
    localStorage.clear();
    navigate("/admin/login");
  };
  const [open, setOpen] = useState(true);
  return (
    <div className=" max-sm:absolute max-md:absolute max-lg:absolute sticky top-16">
      <div
        className={`bg-[#F9F9F9]  h-[91vh]  ${
          open ? "w-72" : "w-16"
        } duration-500   text-black px-4  `}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={menu?.name}
              className="group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
                rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
                group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          <Link
            to={'/admin/notifications'}
            type="button"
            className="group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
          >
            <div>{React.createElement(MdOutlineNotifications, { size: "20" })}</div>
            <h2
              style={{ transitionDelay: "800ms" }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              notification
             {newNotification && <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                new
              </span>}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold w-0 overflow-hidden whitespace-pre text-gray-900
                rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
                group-hover:w-fit`}
            >
              notification
             {newNotification && <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
              new 
              </span>}
            </h2>
          </Link>

          <button
            onClick={logOut}
            type="button"
            className="group flex items-center text-sm gap-3.5  font-medium p-2 hover:bg-[#bbc0c7]  rounded-md"
          >
            <div>{React.createElement(BiLogOut, { size: "20" })}</div>
            <h2
              style={{ transitionDelay: "900ms" }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              Log out
            </h2>
            <h2
              className={`${
                open && "hidden"
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
  );
}

export default SideBar;
