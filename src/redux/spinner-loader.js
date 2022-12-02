import { SET_SPINNER } from "./types";

const initialState = {
  spinner: true,
};

export const spinnerState = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPINNER:
      return {
        ...state,
        spinner: action.payload,
      };
    default:
      return state;
  }
};
