import React from "react";
import { useCategory } from "../../context/providers";

const VideoDisplayCard = ({ video }) => {
  const {
    categoryState: { categories },
  } = useCategory();

  const getCategoryImg = (category) => {
    let foundCategory = categories.find(
      (item) => item.categoryName === category
    );

    return foundCategory?.categoryImg;
  };

  const categoryImage = getCategoryImg(video.category);

  return (
    <div className="videoCard">
      <div className="videoCard__hero__img">
        <i className="absolute text-6xl text-amber-500 cursor-pointer fa-solid fa-play"></i>
        <img src={video.img} alt="" />
      </div>

      <div className="videoCard__body">
        <h3>{video.title}</h3>

        <div className="flex align-items-center">
          <img
            className="rounded-full h-10 w-10"
            src={categoryImage ? categoryImage : ""}
            alt="category-img"
          />

          <h4 className="text-amber-500"> {video.category} </h4>
        </div>

        <p> {video.desc} </p>

        <div className="videoCard__actions flex justify-between mt-8">
          <i className="text-2xl fa-solid fa-circle-plus"></i>
          <div>
            <i className="text-2xl mr-3 fa-solid fa-clock"></i>
            <i className="text-2xl fa-solid fa-heart-circle-bolt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDisplayCard;
