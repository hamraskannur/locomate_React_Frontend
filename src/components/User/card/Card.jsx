import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/router";  

const Card = ({data,functionName , button ,request ,deleteReq}) => {
    const router = useRouter();
    const getAccountPage = async (user) => {
          router.push(`/user/getAccount/${user}`);
      };
  return (
    <>
      <div className="w-36  border-slate-700 border-2 rounded-md">
       {request && <div className="justify-end flex mt-1 mr-1">
        <div onClick={()=>deleteReq(data?._id)} className='cursor-pointer' >{React.createElement(RxCross2, { size: "20" })}</div>
        </div>}
        <div className={`flex items-center justify-center ${!request && "mt-5"}`}>
          <img
           onClick={()=>getAccountPage(data?._id)}
            className="h-24 cursor-pointer"
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"}
            alt=""
          />
        </div>
        <div  onClick={()=>getAccountPage(data?._id)} className="flex items-center justify-center  cursor-pointer">
          <div className=" font-semibold  items-center justify-center">
            <h2>{data?.username}</h2>
          </div>
        </div>
          <div  onClick={()=>getAccountPage(data?._id)} className=" flex items-center justify-center  cursor-pointer" >
            <p className="text-gray-400 text-sm ">{data?.name}</p>
          </div>
        <div className="flex items-center justify-center m-2">
          <button  onClick={()=>functionName(data?._id)} className="text-white w-10/12 bg-slate-700 p-1  rounded-full px-2 ">
          {button}
          </button>
        </div>
      </div>
      </>
  );
};

export default Card;
