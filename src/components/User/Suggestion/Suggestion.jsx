import { useSelector } from "react-redux";
import Avatar from "../Posts/Avatar";
import React from "react";
import { RiContactsFill } from "react-icons/ri";
import Advertisement from "../Advertisement/Advertisement";

const Suggestion = (props) => {
  const sideBar = useSelector((state) => state?.sideBar?.sideBar);
  return (
          <div className=" p-4 py-1 m-10 z-0  top-0  sticky ">
        <div
          className=" bg-white  shadow:lg
     shadow-gray-300 rounded-md p-4 mb-5  w-full  "
        >
    <Advertisement/>
        </div>
      </div>
    );
  };
  
  export default Suggestion;
  
  
    //   <div className=" p-4 py-1 top-20 z-0    sticky ">
    //     <div
    //       className=" bg-white  shadow:lg
    //  shadow-gray-300 rounded-md p-4 mb-5  w-full mt-6 "
    //     >
    //       <h2 className="text-gray-400 mb-5">People you may know</h2>
    //       <div className="flex items-center gap-2 py-2 px-2 hover:bg-[#bbc0c7] hover:scale-105">
    //         <div>
    //           <Avatar />
    //         </div>
    //         <div className="px-2 font-semibold">
    //           <h2> Messi</h2>
    //           <p className="text-gray-400 text-sm p-0">Argentina</p>
    //         </div>
  
    //         {!sideBar && (
    //           <div className="ml-auto flex duration-900">
    //             <div>
    //               <h1 className="align-middle ml-8 font-semibold">200</h1>
    //               <div className="text-slate-700 p-1 rounded-md px-2 flex">
    //                 <div>
    //                   {React.createElement(RiContactsFill, { size: "20" })}
    //                 </div>
    //                 followers
    //               </div>
    //             </div>
    //             <div>
    //               <h1 className="align-middle ml-8 font-semibold">200</h1>
    //               <div className="text-slate-700 p-1 rounded-md px-2 flex">
    //                 <div>
    //                   {React.createElement(RiContactsFill, { size: "20" })}
    //                 </div>
    //                 following
    //               </div>
    //             </div>
    //           </div>
    //         )}
    //         <div className="ml-auto ">
    //           <button className="text-white bg-slate-700 p-1 rounded-md px-2 ml-5">
    //             Follow
    //           </button>
    //         </div>
    //       </div>
    //       <div className="flex items-center gap-2 py-2 px-2 hover:bg-[#bbc0c7] hover:scale-105">
    //         <div>
    //           <Avatar />
    //         </div>
    //         <div className="px-2 font-semibold">
    //           <h2> Messi</h2>
    //           <p className="text-gray-400 text-sm p-0">Argentina</p>
    //         </div>
    //         {!sideBar && (
    //           <div className="ml-auto flex duration-900 ">
    //             <div>
    //               <h1 className="align-middle ml-8 font-semibold">200</h1>
    //               <div className="text-slate-700 p-1 rounded-md px-2 flex">
    //                 <div>
    //                   {React.createElement(RiContactsFill, { size: "20" })}
    //                 </div>
    //                 followers
    //               </div>
    //             </div>
    //             <div>
    //               <h1 className="align-middle ml-8 font-semibold">200</h1>
    //               <div className="text-slate-700 p-1 rounded-md px-2 flex">
    //                 <div>
    //                   {React.createElement(RiContactsFill, { size: "20" })}
    //                 </div>
    //                 following
    //               </div>
    //             </div>
    //           </div>
    //         )}
    //         <div className="ml-auto ">
    //           <button className="text-white bg-slate-700 p-1 rounded-md px-2 ml-5">
    //             Follow
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    