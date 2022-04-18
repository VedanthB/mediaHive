import React from "react";
import AddToPlaylistForm from "../explore-page/AddToPlaylistForm";

const CreatePlaylist = () => {
  return (
    <div className="flex w-full h-full">
      <div
        className="w-full h-full p-4"
        style={{ borderRight: "1px dotted #040714" }}
      >
        <AddToPlaylistForm />
      </div>
    </div>
  );
};

export default CreatePlaylist;
