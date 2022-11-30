const initialState = {
  tab: "",
};

const CHEAP = "CHEAP";
const FAST = "FAST";
const OPTIMAL = "OPTIMAL";

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
