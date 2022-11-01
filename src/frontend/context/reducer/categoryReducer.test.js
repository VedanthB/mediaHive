import React from "react";
import { categoryActions } from "../constants";
import { categoryReducer } from "./categoryReducer";

describe("testing category reducer", () => {
  test("if loading action is dispatched", () => {
    let action = {
      type: categoryActions.LOADING,
      payload: {},
    };

    const initialState = {
      categories: [],
      error: null,
      loading: false,
    };

    let state = categoryReducer(initialState, action);

    expect(state).toEqual({
      categories: [],
      error: null,
      loading: true,
    });
  });

  test("if error action is dispatched", () => {
    let action = {
      type: categoryActions.ERROR,
      payload: "This is a Error",
    };

    const initialState = {
      categories: [],
      error: null,
      loading: false,
    };

    let state = categoryReducer(initialState, action);

    expect(state).toEqual({
      categories: [],
      error: "This is a Error",
      loading: false,
    });
  });

  test("if get category action is dispatched", () => {
    let action = {
      type: categoryActions.GET_CATEGORIES,
      payload: [
        {
          _id: "a7c1f639-e364-4a25-a30c-d6538ea8d01e",
          categoryName: "Disney",
          categoryImg:
            "https://res.cloudinary.com/supertramp69420/image/upload/v1649247527/mediaHive/viewers-disney_gbivhz.png",
          categoryVideo:
            "https://res.cloudinary.com/supertramp69420/video/upload/v1649247530/mediaHive/1564674844-disney_vw1f6t.mp4",
          id: "1",
        },
        {
          _id: "6c259deb-3329-4aa1-b6e9-d72eb13a39f8",
          categoryName: "Pixar",
          categoryImg:
            "https://res.cloudinary.com/supertramp69420/image/upload/v1649247523/mediaHive/viewers-pixar_bggwew.png",
          categoryVideo:
            "https://res.cloudinary.com/supertramp69420/video/upload/v1649247529/mediaHive/1564676714-pixar_ucz4zp.mp4",
          id: "2",
        },
        {
          _id: "a31e9991-5b49-438c-918c-be03df73fde9",
          categoryName: "Marvel",
          categoryImg:
            "https://res.cloudinary.com/supertramp69420/image/upload/v1649247525/mediaHive/viewers-marvel_whhqex.png",
          categoryVideo:
            "https://res.cloudinary.com/supertramp69420/video/upload/v1649247530/mediaHive/1564676115-marvel_ujhqmb.mp4",
          id: "3",
        },
        {
          _id: "d6c6714e-b149-4885-9d22-6f0c706b7c23",
          categoryName: "Star Wars",
          categoryImg:
            "https://res.cloudinary.com/supertramp69420/image/upload/v1649247522/mediaHive/viewers-starwars_w3ngvz.png",
          categoryVideo:
            "https://res.cloudinary.com/supertramp69420/video/upload/v1649247529/mediaHive/1608229455-star-wars_whyu6s.mp4",
          id: "4",
        },
        {
          _id: "f8c7ae6a-4472-462c-897c-ddebeae681cf",
          categoryName: "Nat Geo",
          categoryImg:
            "https://res.cloudinary.com/supertramp69420/image/upload/v1649247524/mediaHive/viewers-national_v3hltj.png",
          categoryVideo:
            "https://res.cloudinary.com/supertramp69420/video/upload/v1649247530/mediaHive/1564676296-national-geographic_heh0za.mp4",
          id: "5",
        },
      ],
    };

    const initialState = {
      categories: [],
      error: null,
      loading: false,
    };

    let state = categoryReducer(initialState, action);

    expect(state).toEqual({
      categories: action.payload,
      error: null,
      loading: false,
    });
  });
});
