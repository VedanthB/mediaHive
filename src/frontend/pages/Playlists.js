import React, { useState } from "react";
import { PlaylistPageList, VideoDisplayCard } from "../components";
import { usePlaylist } from "../context/providers";

const Playlists = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const {
    playlistState: { playlists },
  } = usePlaylist();

  let videosInPlaylist =
    selectedPlaylist !== null &&
    playlists.find((playlist) => playlist.title === selectedPlaylist);

  return (
    <div className="playlistPage__container">
      <div className="h-full w-full">
        <div className="row h-full">
          <div className="col-3-lg col-12-sm  p-2 text-white h-full w-full">
            <PlaylistPageList
              selectedPlaylist={selectedPlaylist}
              setSelectedPlaylist={setSelectedPlaylist}
            />
          </div>
          <div className="col-9-lg col-12-sm  p-2 text-white  h-full w-full">
            {/* videos in the playlist */}
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>

            <div className="text-center">
              {videosInPlaylist.length === 0 && (
                <h4>please add videos to playlist</h4>
              )}
            </div>

            <div
              style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}
              className="grid"
            >
              {videosInPlaylist.videos &&
                videosInPlaylist.videos.map((video, i) => (
                  <VideoDisplayCard key={i} video={video} />
                ))}
            </div>
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>
            <div className="spacer-3rem"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlists;
