/* eslint-disable no-underscore-dangle */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getAllUser, blockUser } from "../../../Api/adminApi/adminApi";

function ShowAllUser() {
  const router = useRouter();
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(0);

  const submitBlockUser = async (userId) => {
    setLoading(0);
    await blockUser(true, userId);
    setLoading(1);
  };
  const submitUnblockUser = async (userId) => {
    setLoading(0);
    await blockUser(false, userId);
    setLoading(1);
  };
  const getUserPage = async (userId) => {
        router.push(
          {
            pathname: "/admin/oneUser",
            query: {
              userId: userId,
              admin:true
            },
          },
          "/admin/getviewUser"
        )
      
  };
  useEffect(() => {
    getAllUser().then((response) => {
      setUser(response);
    });
  }, [loading === 1]);
  return (
    <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16">
      <div className="p-5 h-screen min-w-full bg-[#FFFFFF]">
        <table className="w-full mt-5">
          <thead className="bg-gray-50 border-b-2 border-stone-700 ">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                {" "}
                No
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Email
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                UserName
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Date of Birth
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Status
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                view user
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, index) => (
              <tr className="b-white border-b-2 ">
                <td className="p-3 pt-7  text-sm text-gray-700">{index + 1}</td>
                <td className="p-3 pt-7 text-sm text-gray-700">{item.name}</td>
                <td className="p-3 pt-7 text-sm text-gray-700">{item.email}</td>
                <td className="p-3 pt-7 text-sm text-gray-700">
                  {item.username}
                </td>
                <td className="p-3 pt-7 text-sm text-gray-700">
                  {item.dob.slice(0, 10)}
                </td>
                {item.status ? (
                  <button
                    type="button"
                    onClick={() => {
                      submitUnblockUser(item._id);
                    }}
                    className="mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Unblock
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      submitBlockUser(item._id);
                    }}
                    className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Block
                  </button>
                )}
                <td>
                  <button
                    type="button"
                    onClick={()=>getUserPage(item._id)}
                    className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    view user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowAllUser;
