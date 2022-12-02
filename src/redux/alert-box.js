import { SET_ALERT } from "./types";

const initialState = {
  alert: false,
};

export const alertState = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};
