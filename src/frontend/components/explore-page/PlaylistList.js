import React from "react";
import PlaylistListItem from "./PlaylistListItem";

function PlaylistList() {
  return (
    <ul className="flex flex-col">
      <li className="text-black pt-3 pb-3 font-semibold text-lg">Playlists</li>
      <PlaylistListItem value={""} onChange={""} playlistName="some name" />
    </ul>
  );
}

export default PlaylistList;
