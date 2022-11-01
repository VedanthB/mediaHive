import React from "react";
import { filterActions } from "../constants";
import { filterReducer } from "./filterReducer";

describe("testing filter reducer", () => {
  test("if filter by is dispatched", () => {
    let action = {
      type: filterActions.FILTER_BY,
      payload: "Disney",
    };

    const filtersInitialState = {
      filterBy: "All",
    };

    let state = filterReducer(filtersInitialState, action);

    expect(state).toEqual({
      filterBy: "Disney",
    });
  });
});
