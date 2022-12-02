import { CHEAP, FAST, OPTIMAL } from "./types";

const initialState = {
  tab: "",
};

export const tabState = (state = initialState, action) => {
  switch (action.type) {
    case CHEAP:
      return {
        ...state,
        tab: "cheap",
      };
    case FAST:
      return {
        ...state,
        tab: "fast",
      };
    case OPTIMAL:
      return {
        ...state,
        tab: "optimal",
      };
    default:
      return state;
  }
};
