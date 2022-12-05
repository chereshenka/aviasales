import { ADD_FILTER } from "./types";

const initialState = {
  filter: [],
};

export const filterState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
