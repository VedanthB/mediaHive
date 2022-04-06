import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="categoryCard">
      <img
        src="https://res.cloudinary.com/supertramp69420/image/upload/v1649247527/mediaHive/viewers-disney_gbivhz.png"
        alt=""
      />
      <video autoPlay={true} loop={true} playsInline={true}>
        <source
          src="https://res.cloudinary.com/supertramp69420/video/upload/v1649247530/mediaHive/1564674844-disney_vw1f6t.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default CategoryCard;
