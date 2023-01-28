import React from 'react'

const avatar = ({img}) => {
  return (
    <div>
      <div className="w-9 rounded-full overflow-hidden">
        <img
          src={img}
          alt="img"
        />
     </div>
    </div>
  )
};

export default avatar;