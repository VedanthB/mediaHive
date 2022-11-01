import React from "react";
import { likeVideosActions } from "../constants";
import { likedVideosReducer } from "./likedVideosReducer";

describe("testing like videos reducer", () => {
  test("if loading action is dispatched and changes loading state", () => {
    let action = {
      type: likeVideosActions.LOADING,
    };

    const initLikedVideosState = {
      likedVideos: [],
      loading: false,
      error: null,
    };

    let state = likedVideosReducer(initLikedVideosState, action);

    expect(state).toEqual({
      likedVideos: [],
      loading: true,
      error: null,
    });
  });

  test("if error action is dispatched and changes error state", () => {
    let action = {
      type: likeVideosActions.ERROR,
      payload: "This is a error",
    };

    const initLikedVideosState = {
      likedVideos: [],
      loading: false,
      error: null,
    };

    let state = likedVideosReducer(initLikedVideosState, action);

    expect(state).toEqual({
      likedVideos: [],
      loading: false,
      error: action.payload,
    });
  });

  test("if get all liked action is dispatched and changes likedVideos  state", () => {
    let action = {
      type: likeVideosActions.GET_ALL_LIKED_VIDEOS,
      payload: [
        {
          _id: "SIRtw4WufsA",
          title: "Unexpected Company",
          img: "https://i.ytimg.com/vi/SIRtw4WufsA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWeOYmbsHn4qs5Ss5j5wHrrXKC0A",
          category: "Star Wars",
          desc: "Ahsoka joins Anakin on a mission planned for just he and Padme.  Anakin, upset at the intrusion, sets a quicker flight path that puts them in the path of a Separatist blockade.  The three must put differences aside to get past the blockade.",
          id: "2",
        },
      ],
    };

    const initLikedVideosState = {
      likedVideos: [],
      loading: false,
      error: null,
    };

    let state = likedVideosReducer(initLikedVideosState, action);

    expect(state).toEqual({
      likedVideos: action.payload,
      loading: false,
      error: null,
    });
  });

  test("if add to liked videos action is dispatched and changes likedVideos state", () => {
    let action = {
      type: likeVideosActions.ADD_VIDEO_TO_LIKED_VIDEOS,
      payload: [
        {
          _id: "SIRtw4WufsA",
          title: "Unexpected Company",
          img: "https://i.ytimg.com/vi/SIRtw4WufsA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWeOYmbsHn4qs5Ss5j5wHrrXKC0A",
          category: "Star Wars",
          desc: "Ahsoka joins Anakin on a mission planned for just he and Padme.  Anakin, upset at the intrusion, sets a quicker flight path that puts them in the path of a Separatist blockade.  The three must put differences aside to get past the blockade.",
          id: "2",
        },
      ],
    };

    const initLikedVideosState = {
      likedVideos: [],
      loading: false,
      error: null,
    };

    let state = likedVideosReducer(initLikedVideosState, action);

    expect(state).toEqual({
      likedVideos: action.payload,
      loading: false,
      error: null,
    });
  });

  test("if remove from liked videos action is dispatched and changes likedVideos  state", () => {
    let action = {
      type: likeVideosActions.REMOVE_VIDEO_FROM_LIKED_VIDEOS,
      payload: [
        {
          _id: "SIRtw4WufsA",
          title: "Unexpected Company",
          img: "https://i.ytimg.com/vi/SIRtw4WufsA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWeOYmbsHn4qs5Ss5j5wHrrXKC0A",
          category: "Star Wars",
          desc: "Ahsoka joins Anakin on a mission planned for just he and Padme.  Anakin, upset at the intrusion, sets a quicker flight path that puts them in the path of a Separatist blockade.  The three must put differences aside to get past the blockade.",
          id: "2",
        },
      ],
    };

    const initLikedVideosState = {
      likedVideos: [],
      loading: false,
      error: null,
    };

    let state = likedVideosReducer(initLikedVideosState, action);

    expect(state).toEqual({
      likedVideos: action.payload,
      loading: false,
      error: null,
    });
  });
});
