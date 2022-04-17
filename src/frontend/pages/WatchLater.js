import React from "react";
import { LikedVideoCard } from "../components";
import { useWatchLater } from "../context/providers";

const WatchLater = () => {
  const {
    watchLaterState: { watchLater },
  } = useWatchLater();

  return (
    <div className="likedVideos__container">
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div className="text-center">
        {watchLater.length === 0 && <h4>please add videos to watch later</h4>}
      </div>

      <div className="likedVideos__main">
        {watchLater &&
          watchLater.map((video) => (
            <LikedVideoCard video={video} key={video._id} />
          ))}
      </div>

      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </div>
  );
};

export default WatchLater;
