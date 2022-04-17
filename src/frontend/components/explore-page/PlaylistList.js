import React from "react";
import { usePlaylist } from "../../context/providers";
import PlaylistListItem from "./PlaylistListItem";

function PlaylistList({ video }) {
  const {
    playlistState: { playlists },
  } = usePlaylist();

  return (
    <ul className="flex flex-col">
      <li className="text-black pt-3 pb-3 font-semibold text-lg">Playlists</li>
      {playlists &&
        playlists.map((playlist, i) => (
          <PlaylistListItem
            key={i}
            playlistName={playlist.title}
            video={video}
            playlistId={playlist._id}
          />
        ))}
    </ul>
  );
}

export default PlaylistList;
