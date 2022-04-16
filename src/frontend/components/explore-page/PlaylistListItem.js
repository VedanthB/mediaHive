import React from "react";

function PlaylistListItem({ playlistName, value, onChange }) {
  return (
    <li className="pb-3">
      <label className="text-black text-lg">
        <input
          type="checkbox"
          value={value}
          onChange={onChange}
          className="mr-3"
        />
        {playlistName}
      </label>
    </li>
  );
}

export default PlaylistListItem;
