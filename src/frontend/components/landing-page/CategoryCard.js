import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="categoryCard">
      <img src={category.categoryImg} alt={category.categoryName} />
      <video autoPlay={true} loop={true} playsInline={true}>
        <source src={category.categoryVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default CategoryCard;
