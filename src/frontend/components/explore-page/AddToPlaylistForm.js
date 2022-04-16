import React, { useState } from "react";
import Input from "../Input";
import TextArea from "../TextArea";

const initPlaylistState = {
  name: "",
  desc: "",
};

const AddToPlaylistForm = () => {
  const [playlistDetails, setPlaylistDetails] = useState(initPlaylistState);

  return (
    <div>
      <Input
        value={playlistDetails.name}
        name="name"
        onChange={(e) => {
          const { name, value } = e.target;

          setPlaylistDetails({ ...playlistDetails, [name]: value });
        }}
        label={"Playlist Title"}
      />

      <div className="spacer-1rem"></div>

      <TextArea
        value={playlistDetails.desc}
        name="desc"
        onChange={(e) => {
          const { name, value } = e.target;

          setPlaylistDetails({ ...playlistDetails, [name]: value });
        }}
        label={"Playlist Description"}
        style={{ height: "100px" }}
      />

      <div className="spacer-3rem"></div>
      <div className="spacer-1rem"></div>

      <button className="btn btn-solid-amber shadow-lg text-white">
        create playlist
      </button>
    </div>
  );
};

export default AddToPlaylistForm;
