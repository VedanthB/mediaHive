import React from "react";
import { authActions } from "../constants";
const { authReducer } = require("./authReducer");

describe("testing auth reducer", () => {
  test("if loading action is dispatched", () => {
    let action = {
      type: authActions.LOADING,
      payload: {},
    };

    const initialState = {
      loading: false,
      error: null,
      user: {},
      encodedToken: null,
    };

    let state = authReducer(initialState, action);

    expect(state).toEqual({
      loading: true,
      error: null,
      user: {},
      encodedToken: null,
    });
  });

  test("if user is logged in", () => {
    let action = {
      type: authActions.LOGIN_SUCCESS,
      payload: {
        foundUser: {
          _id: "8b239112-d80d-4efc-a737-fef9d99fd0c8",
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          createdAt: "2022-11-01T18:48:28+05:30",
          updatedAt: "2022-11-01T18:48:28+05:30",
          likes: [],
          watchlater: [],
          history: [],
          playlists: [],
          id: "2",
        },
        encodedToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4YjIzOTExMi1kODBkLTRlZmMtYTczNy1mZWY5ZDk5ZmQwYzgiLCJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIn0.qN7MEOv3DNtGBbwgfVKhcSWWLdeZz2riLhlauBds4Fc",
      },
    };

    const initialState = {
      loading: false,
      error: null,
      user: {},
      encodedToken: null,
    };

    let state = authReducer(initialState, action);

    expect(state).toEqual({
      loading: false,
      error: null,
      user: action.payload.foundUser,
      encodedToken: action.payload.encodedToken,
    });
  });

  test("if user is signed up", () => {
    let action = {
      type: authActions.SIGNUP_SUCCESS,
      payload: {
        createdUser: {
          _id: "8b239112-d80d-4efc-a737-fef9d99fd0c8",
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          createdAt: "2022-11-01T18:48:28+05:30",
          updatedAt: "2022-11-01T18:48:28+05:30",
          likes: [],
          watchlater: [],
          history: [],
          playlists: [],
          id: "2",
        },
        encodedToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4YjIzOTExMi1kODBkLTRlZmMtYTczNy1mZWY5ZDk5ZmQwYzgiLCJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIn0.qN7MEOv3DNtGBbwgfVKhcSWWLdeZz2riLhlauBds4Fc",
      },
    };

    const initialState = {
      loading: false,
      error: null,
      user: {},
      encodedToken: null,
    };

    let state = authReducer(initialState, action);

    expect(state).toEqual({
      loading: false,
      error: null,
      user: action.payload.createdUser,
      encodedToken: action.payload.encodedToken,
    });
  });

  test("if user is logged out", () => {
    let action = {
      type: authActions.LOGOUT_SUCCESS,
    };

    let initUserState = {
      loading: false,
      error: null,
      user: {
        _id: "8b239112-d80d-4efc-a737-fef9d99fd0c8",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        createdAt: "2022-11-01T18:48:28+05:30",
        updatedAt: "2022-11-01T18:48:28+05:30",
        likes: [],
        watchlater: [],
        history: [],
        playlists: [],
        id: "2",
      },
      encodedToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4YjIzOTExMi1kODBkLTRlZmMtYTczNy1mZWY5ZDk5ZmQwYzgiLCJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIn0.qN7MEOv3DNtGBbwgfVKhcSWWLdeZz2riLhlauBds4Fc",
    };

    let state = authReducer(initUserState, action);

    expect(state).toEqual({
      loading: false,
      error: null,
      user: {},
      encodedToken: null,
    });
  });

  test("if error action is dispatched", () => {});
});
