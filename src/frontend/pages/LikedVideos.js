import React from "react";
import { LikedVideoCard } from "../components";
import { useLikedVideos } from "../context/providers";

const LikedVideos = () => {
  const {
    likedVideosState: { likedVideos },
  } = useLikedVideos();

  return (
    <div className="likedVideos__container">
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div className="likedVideos__main">
        {likedVideos &&
          likedVideos.map((video) => (
            <LikedVideoCard video={video} key={video._id} />
          ))}
      </div>

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </div>
  );
};

export default LikedVideos;
