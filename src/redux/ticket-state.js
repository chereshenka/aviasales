import { ADD_TICKETS, SORT_PRICE, SORT_TIME, FILTER_CATEGORY } from "./types";
import { filtered } from "../utils/filter-functions";

const initialState = {
  tickets: [],
};

export const ticketState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };
    case SORT_PRICE:
      return {
        ...state,
        tickets: [...action.payload].sort((a, b) => a.price - b.price),
      };
    case SORT_TIME:
      return {
        ...state,
        tickets: [...action.payload].sort(
          (a, b) => a["segments"][0]["duration"] - b["segments"][0]["duration"],
        ),
      };
    case FILTER_CATEGORY:
      console.log("filter categoty", state);
      return {
        ...state,
        tickets: [...filtered(state.tickets, action.payload)],
      };
    default:
      return state;
  }
};
