import React, { useState, useEffect } from "react";
import { useAuth, usePlaylist } from "../../context/providers";
import { addToPlaylist } from "../../utils";

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
          onChange={(e) => setAddedToPlaylist(e.target.checked)}
          className="mr-3"
        />
        {playlistName}
      </label>
    </li>
  );
}

export default PlaylistListItem;
