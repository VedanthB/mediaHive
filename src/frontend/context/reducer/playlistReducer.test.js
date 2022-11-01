import React from "react";
import { playlistActions } from "../constants";

import { playlistReducer } from "./playlistReducer";

describe("testing playlist reducer", () => {
  test("if loading by is dispatched", () => {
    let action = {
      type: playlistActions.LOADING,
    };

    const initPlaylistState = {
      playlists: [],
      loading: false,
      error: null,
    };
    let state = playlistReducer(initPlaylistState, action);

    expect(state).toEqual({
      playlists: [],
      loading: true,
      error: null,
    });
  });

  test("if loading by is dispatched", () => {
    let action = {
      type: playlistActions.ERROR,
      payload: "This is an error",
    };

    const initPlaylistState = {
      playlists: [],
      loading: false,
      error: null,
    };
    let state = playlistReducer(initPlaylistState, action);

    expect(state).toEqual({
      playlists: [],
      loading: false,
      error: action.payload,
    });
  });
});
