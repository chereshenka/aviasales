import { ADD_TICKETS, SORT_PRICE, SORT_TIME } from "./types";

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
        tickets: action.payload.sort((a, b) => a.price - b.price),
      };
    case SORT_TIME:
      return {
        ...state,
        tickets: action.payload.sort(
          (a, b) => a["segments"][0]["duration"] - b["segments"][0]["duration"],
        ),
      };
    default:
      return state;
  }
};
