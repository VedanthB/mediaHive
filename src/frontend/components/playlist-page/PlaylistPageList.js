import React, { useState } from "react";
import { usePlaylist } from "../../context/providers";
import Modal from "../Modal";
import CreatePlaylist from "./CreatePlaylist";
import PlaylistPageListItem from "./PlaylistPageListItem";

const PlaylistPageList = ({ selectedPlaylist, setSelectedPlaylist }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    playlistState: { playlists },
  } = usePlaylist();

  return (
    <>
      <ul className="flex flex-col">
        <li
          style={{ textDecoration: "underline" }}
          className="text-white pt-3 pb-3 font-semibold text-lg"
        >
          Playlists
          <button
            onClick={() => setShowModal(true)}
            className="ml-5 btn btn-solid-amber shadow-lg text-white"
          >
            {" "}
            create playlist
          </button>
        </li>

        {playlists &&
          playlists.map((playlist) => (
            <PlaylistPageListItem
              key={playlist._id}
              playlistName={playlist.title}
              selectedPlaylist={selectedPlaylist}
              setSelectedPlaylist={setSelectedPlaylist}
              playlistId={playlist._id}
            />
          ))}

        {playlists.length === 0 && (
          <h4 className="text-md text-white">
            {" "}
            No playlists, create one please{" "}
          </h4>
        )}
      </ul>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalBody={<CreatePlaylist />}
        modalTitle={"Add to Playlist"}
      />
    </>
  );
};

export default PlaylistPageList;
