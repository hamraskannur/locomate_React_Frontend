import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Post from "../Posts/Posts";

const ReportUsers = () => {
  const location=useLocation()
  const { item }  = location.state

  const [report, setReport] = useState(item);
  const [ShowPost,setShowPost]=useState(false)
  return (
    <>
      <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 m-5">
   

        <button
          onClick={() => setShowPost(!ShowPost)}
          className="w-auto items-end mt-4 inline-block px-6 py-2.5 bg-slate-700 text-white font-medium text-xs leading-tight uppercase rounded-md m-5 shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-slate-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          show Post
        </button>
        <div  className="items-center justify-center flex">
       {ShowPost && <div className=" w-9/12  max-sm:w-full max-md:w-full max-lg:w-full items-center justify-center flex">

          <Post post={report.PostId} />
        </div>}

        </div>
        <div className="p-4 h-screen min-w-full bg-[#FFFFFF]">
          <table className="w-full ">
            <thead className="bg-gray-50 border-b-2 border-stone-700 ">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  No
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  User Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  reason for report
                </th>
              </tr>
            </thead>
            {report && (
              <tbody>
                {report?.userText.map((item, index) => (
                  <tr key={item._id} className="b-white border-b-2 ">
                    <td className="p-3 pt-7  text-sm text-gray-700">
                      {index + 1}
                    </td>
                    <td className="p-3 pt-7 text-sm text-gray-700">
                      {item.userId.username}
                    </td>
                    <td className="p-3 pt-7 text-sm text-gray-700">
                      {item.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default ReportUsers;
