import React from "react";

const Avatars = ({img,size}) => {
  return (
    <div>
      <div class={`${size?size:"w-9"} rounded-full overflow-hidden`}>
        <img
          src={
            img
              ? img
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          }
          alt="avatars"
        />
      </div>
    </div>
  );
};

export default Avatars;
