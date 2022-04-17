import React from "react";
import { LikedVideoCard } from "../components";
import { useLikedVideos } from "../context/providers";

const LikedVideos = () => {
  const {
    likedVideosState: { likedVideos },
  } = useLikedVideos();

  console.log(likedVideos);

  return (
    <div className="likedVideos__container">
      {likedVideos &&
        likedVideos.map((video) => (
          <LikedVideoCard video={video} key={video._id} />
        ))}
    </div>
  );
};

export default LikedVideos;
