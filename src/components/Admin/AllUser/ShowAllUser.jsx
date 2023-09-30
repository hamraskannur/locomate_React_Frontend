import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUser, blockUser } from "../../../Api/adminApi/adminApi";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
function ShowAllUser() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(0);
  const [users, setUsers] = useState([]);

  const submitBlockUser = async (userId, user) => {
    const { Status } = await blockUser(true, userId);
    if (Status) {
      const blockedUser = { ...user, status: true };
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === userId ? blockedUser : user))
      );
    }
  };
  const submitUnblockUser = async (userId, user) => {
    const { Status } = await blockUser(false, userId);
    if (Status) {
      const unBlockedUser = { ...user, status: false };
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === userId ? unBlockedUser : user))
      );
    }
  };

  const getUserPage = async (userId) => {
    navigate("/admin/userProfile", { state: { userId: userId, admin: true } });
  };

  useEffect(() => {
    (async () => {
      const response = await getAllUser();
      setUsers(response);
    })();
  }, []);

  const submit = (userId, item) => {
    confirmAlert({
      title: "Confirm to ",
      message: "Are you block your user.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            submitBlockUser(userId, item);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 ">
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
                Status
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                view user
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, index) => (
              <tr key={item._id} className="b-white border-b-2 ">
                <td className="p-3 pt-7  text-sm text-gray-700">{index + 1}</td>
                <td className="p-3 pt-7 text-sm text-gray-700">{item.name}</td>
                <td className="p-3 pt-7 text-sm text-gray-700">{item.email}</td>
                <td className="p-3 pt-7 text-sm text-gray-700">
                  {item.username}
                </td>
                {item.status ? (
                  <button
                    type="button"
                    onClick={() => {
                      submitUnblockUser(item._id, item);
                    }}
                    className="mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Unblock
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => submit(item._id, item)}
                    className="mt-4 inline-block px-6 py-2.5 bg-slate-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-slate-500 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Block
                  </button>
                )}
                <td>
                  <button
                    type="button"
                    onClick={() => getUserPage(item._id)}
                    className="mt-4 inline-block px-6 py-2.5 bg-slate-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-slate-500 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out"
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
