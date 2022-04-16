import React from "react";
import AddToPlaylistForm from "./AddToPlaylistForm";
import PlaylistList from "./PlaylistList";

const AddToPlaylist = ({ video }) => {
  return (
    <div className="flex w-full h-full">
      <div className="w-half p-4" style={{ borderRight: "1px dotted #040714" }}>
        <AddToPlaylistForm />
      </div>

      <div className="w-half pl-4">
        <PlaylistList video={video} />
      </div>
    </div>
  );
};

export default AddToPlaylist;
