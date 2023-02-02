import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getUserAllShorts } from "../../../Api/userApi/videoRequest";
import Shorts from "../Shorts/Shorts";

const MyShorts = ({ userId }) => {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    let getAllShorts = async () => {
      const shorts = await getUserAllShorts(userId);
      console.log(shorts);
      setShorts(shorts);
    };
    getAllShorts();
  }, []);
  return (
    <>
      {shorts.length>0 && shorts?.map((shorts) => (
        <>
          {shorts.status && <Shorts post={shorts} key={shorts?._id} />}
        </>
      ))}
        {shorts.length === 0  && (
        <div className="">
          <div className="flex justify-center  bg-white">
            <img
              className="bg-white h-28"
              src="https://freepngimg.com/thumb/photography/59850-and-instagram-photography-black-logo-white.png  "
              alt="img"
            />
          </div>
          <div className="flex justify-center">
            <h1 className="not-italic">share your post</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default MyShorts;
