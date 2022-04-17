import React from "react";
import { PlaylistPageList } from "../components";

const Playlists = () => {
  return (
    <div className="playlistPage__container">
      <div className="h-full w-full">
        <div className="row h-full">
          <div className="col-3-lg col-12-sm  p-2 text-white h-full w-full">
            <PlaylistPageList />
          </div>
          <div className="col-9-lg col-12-sm  p-2 text-white  h-full w-full">
            {/* videos in the playlist */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlists;
