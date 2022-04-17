import React, { useState, useEffect } from "react";
import { useAuth, usePlaylist } from "../../context/providers";
import { useToast } from "../../hooks";
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

  const { showToast } = useToast();

  const { playlistDispatch } = usePlaylist();

  useEffect(() => {
    if (addedToPlaylist && encodedToken) {
      addToPlaylist(
        encodedToken,
        playlistId,
        video,
        playlistDispatch,
        showToast
      );
    }

    if (!encodedToken) {
      showToast("Please login first!", "error");
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
          encodedToken
            ? deletePlaylist(
                encodedToken,
                playlistId,
                playlistDispatch,
                showToast
              )
            : showToast("Please login first!", "error")
        }
        className="fa-solid fa-trash-can text-amber-500 ml-3 text-hover-red-500 cursor-pointer"
      ></i>
    </li>
  );
};

export default PlaylistPageListItem;
