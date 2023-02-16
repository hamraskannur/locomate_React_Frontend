import React from "react";
import { BiHomeAlt, BiMessageSquareDetail } from "react-icons/bi";
import { DiGitPullRequest } from "react-icons/di";
import { Link } from "react-router-dom";
import { MdOutlineNotifications, MdSlowMotionVideo } from "react-icons/md";
import { useSelector } from "react-redux";

const BottomBar = () => {
  const [userPublic, setUserPublic] = useState(false);
  const [count, setCount] = useState(0);
  const user = useSelector((state) => state?.user?.user);
  useEffect(() => {
    setUserPublic(user?.public);
    setCount(user?.Requests?.length);
  }, []);
  const menus = [
    { name: "Home", link: "/", icon: BiHomeAlt },
    { name: "shorts", link: "/shorts", icon: MdSlowMotionVideo },
    { name: "Messages", link: "/messages", icon: BiMessageSquareDetail },
    {
      name: "notification",
      link: "/notifications",
      icon: MdOutlineNotifications,
    },
  ];

  return (
    <>
      <div className="border-t-2 flex px-4 py-2 justify-between border-slate-700 bg-white bottom-0 h-14 fixed w-full">
        {menus.map((menu) => (
          <Link to={`${menu?.link}`} key={menu?.name}>
            <div className="hover:bg-[#bbc0c7] rounded-md p-2">
              {React.createElement(menu?.icon, { size: "20" })}
            </div>
          </Link>
        ))}

        {!userPublic && (
          <Link to="/friends">
            <div className="hover:bg-[#bbc0c7] rounded-md p-2">
              {React.createElement(DiGitPullRequest, { size: "20" })}
              { count > 0 && (
                <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  {count}
                </span>
              )}
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default BottomBar;
