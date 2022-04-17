import React, { useState, useEffect } from "react";
import { useAuth, usePlaylist } from "../../context/providers";
import { addToPlaylist, deletePlaylist } from "../../utils";
import { removeVideoFromPlaylist } from "../../utils/playlistUtils";

function PlaylistListItem({ playlistName, playlistId, video }) {
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
      <label className="text-black text-lg">
        <input
          type="checkbox"
          value={addedToPlaylist}
          onChange={(e) => {
            if (addedToPlaylist === false && encodedToken) {
              removeVideoFromPlaylist(
                encodedToken,
                playlistId,
                video._id,
                playlistDispatch
              );
            }
            setAddedToPlaylist(e.target.checked);
          }}
          className="mr-3"
        />
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
}

export default PlaylistListItem;
