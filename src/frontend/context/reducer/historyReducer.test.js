import React from "react";
import { historyActions } from "../constants";
import { historyReducer } from "./historyReducer";

describe("testing history reducer", () => {
  test("if loading action is dispatched", () => {
    let action = {
      type: historyActions.LOADING,
      //   payload: {},
    };

    const initHistoryState = {
      history: [],
      loading: false,
      error: null,
    };

    let state = historyReducer(initHistoryState, action);

    expect(state).toEqual({
      history: [],
      loading: true,
      error: null,
    });
  });

  test("if error action is dispatched", () => {
    let action = {
      type: historyActions.ERROR,
      payload: "this is a error",
    };

    const initHistoryState = {
      history: [],
      loading: false,
      error: null,
    };

    let state = historyReducer(initHistoryState, action);

    expect(state).toEqual({
      history: [],
      loading: false,
      error: action.payload,
    });
  });

  test("if get all history action is dispatched", () => {
    let action = {
      type: historyActions.GET_ALL_HISTORY,
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

    const initHistoryState = {
      history: [],
      loading: false,
      error: null,
    };

    let state = historyReducer(initHistoryState, action);

    expect(state).toEqual({
      history: action.payload,
      loading: false,
      error: null,
    });
  });

  test("if remove video history action is dispatched", () => {
    let action = {
      type: historyActions.REMOVE_VIDEO_FROM_HISTORY,
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

    const initHistoryState = {
      history: [],
      loading: false,
      error: null,
    };

    let state = historyReducer(initHistoryState, action);

    expect(state).toEqual({
      history: action.payload,
      loading: false,
      error: null,
    });
  });

  test("if add video history action is dispatched", () => {
    let action = {
      type: historyActions.ADD_VIDEO_TO_HISTORY,
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

    const initHistoryState = {
      history: [],
      loading: false,
      error: null,
    };

    let state = historyReducer(initHistoryState, action);

    expect(state).toEqual({
      history: action.payload,
      loading: false,

      error: null,
    });
  });

  test("if delete all video history action is dispatched", () => {
    let action = {
      type: historyActions.DELETE_ALL_HISTORY,
      payload: [],
    };

    const initHistoryState = {
      history: [],
      loading: false,
      error: null,
    };

    let state = historyReducer(initHistoryState, action);

    expect(state).toEqual({
      history: action.payload,
      loading: false,
      error: null,
    });
  });
});
