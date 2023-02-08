import { useSelector } from "react-redux";
import Avatar from "../Posts/Avatar";
import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Suggestion = ({ user }) => {
  const sideBar = useSelector((state) => state?.sideBar?.sideBar);
  const userId = useSelector((state) => state?.user?.user._id);
  const navigate = useNavigate()  

  const getAccountPage = async (user) => {
 
    if (userId === user) {

      navigate("/myAccount");
    } else {
      
      navigate('/FriendsAccount',{ state: { userId: user,  }} );
    }
  
};
  return (
    <>
      <div onClick={()=>getAccountPage( user._id)} className="flex items-center gap-2 py-2 m-4 px-2 hover:bg-[#bbc0c7] hover:scale-105">
        <div className='cursor-pointer'>
          <Avatar
          
            img={
              user.ProfileImg
                ? user.ProfileImg
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
            }
          />
        </div>
        <div  className="px-2 font-semibold cursor-pointer">
          <h2> {user.username}</h2>
          <p className="text-gray-400 text-sm p-0">{user.name}</p>
        </div>
        {!sideBar && (
          <div className="ml-auto flex duration-900 ">
            <div>
              <h1 className="align-middle ml-8 font-semibold">{user?.Followers?.length?user?.Followers?.length:0}</h1>
              <div className="text-slate-700 p-1 rounded-md px-2 flex">
                <div>              {React.createElement(BsFillPeopleFill, { size: "20" })}
</div>
                followers
              </div>
            </div>
            <div>
              <h1 className="align-middle ml-8 font-semibold">{user?.Following?.length ?user?.Following?.length:0}</h1>
              <div className="text-slate-700 p-1 rounded-md px-2 flex">
                <div>              {React.createElement(BsFillPeopleFill, { size: "20" })}
</div>
                following
              </div>
            </div>
          </div>
        )}
        <div className="ml-auto ">
          <button className="text-white bg-slate-700 p-1 rounded-md px-2 ml-5">
            Go To profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Suggestion;
