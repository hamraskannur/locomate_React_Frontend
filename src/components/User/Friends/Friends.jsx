import React from 'react'
import Card from "../card/Card";

const Friends = () => {
    const followUser = () =>{
        console.log("folloew");
    }
  return (
    <div className="p-5 py-1 top-24 ">
      <div
        className=" bg-white  shadow:lg shadow-gray-300 rounded-md p-4 mb-5  w-full mt-6 ">
        <h2 className="text-gray-400 mb-5">All Friends </h2>
        <div className="flex gap-2 flex-wrap ">
        <Card functionName={followUser} button={"follow"} request={false} />
        </div>
      </div>
    </div>
  )
}

export default Friends
