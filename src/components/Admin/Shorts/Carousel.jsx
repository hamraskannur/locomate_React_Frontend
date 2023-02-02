import React from "react";

const Carousel = ({ image }) => {
  return (
    <>
<div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
  </div>
</div>
   </>
  );
};

export default Carousel;

// {image.map((img) => (
//     <div className="carousel-item active relative float-left w-full">
//      <img className="w-full " src={img} alt="" />
//    </div>
// ))}