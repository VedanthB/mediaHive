import React, { useState, useEffect } from "react";
import { useAuth, usePlaylist } from "../../context/providers";
import { addToPlaylist, deletePlaylist } from "../../utils";

const PlaylistPageListItem = ({
  playlistName,
  playlistId,
  video,
  selectedPlaylist,
  setSelectedPlaylist,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [addedToPlaylist, setAddedToPlaylist] = useState(false);

  const {
    authState: { encodedToken },
  } = useAuth();

  const { playlistDispatch } = usePlaylist();

  useEffect(() => {
    if (addedToPlaylist && encodedToken) {
      addToPlaylist(encodedToken, playlistId, video, playlistDispatch);
    }
  }, [addedToPlaylist]);

  return (
    <li className="pb-3">
      <label
        onClick={() => setSelectedPlaylist(playlistName)}
        className="t text-lg cursor-pointer"
        style={{
          color: `${selectedPlaylist === playlistName ? "#f59e0b" : "white"}`,
        }}
      >
        {playlistName}
      </label>

      <i
        onClick={() =>
          deletePlaylist(encodedToken, playlistId, playlistDispatch)
        }
        className="fa-solid fa-trash-can text-amber-500 ml-3 text-hover-red-500 cursor-pointer"
      ></i>
    </li>
  );
};

export default PlaylistPageListItem;
