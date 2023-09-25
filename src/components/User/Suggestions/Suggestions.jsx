import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { suggestionUsers } from "../../../Api/userApi/profileApi";
import Suggestion from "../Suggestion/Suggestion";

const Suggestions = () => {
  const [user, setUsers] = useState([]);
  const userId = useSelector((state) => state?.user?.user._id);
  useEffect(() => {
    const fetchData = async () => {
        const users = await suggestionUsers();
        setUsers(users);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className=" p-4 py-1 top-20 z-0    sticky ">
        <div
          className=" bg-white  shadow:lg
        shadow-gray-300 rounded-md p-4 mb-5  w-full mt-6 "
        >
          <h2 className="text-gray-400 mb-5">People you may know</h2>
          {user.length > 0 && user.map((item) =>item._id !== userId && <Suggestion key={item._id} user={item} />)}
        </div>
      </div>
    </>
  );
};

export default Suggestions;
