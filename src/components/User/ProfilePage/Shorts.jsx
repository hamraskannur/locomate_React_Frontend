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
      setShorts(shorts);
    };
    getAllShorts();
  }, []);
  return (
    <>
      {shorts.length>0 && shorts?.map((shorts) => (
        <>
          {shorts.status && <Shorts shorts={shorts} key={shorts?._id} />}
        </>
      ))}
    </>
  );
};

export default MyShorts;
