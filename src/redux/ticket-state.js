const ADD_TICKETS = "ADD_TICKETS";
const SORT_PRICE = "SORT_PRICE";
const SORT_TIME = "SORT_TIME";

const initialState = [];

export const ticketState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TICKETS:
      return { ...state, tickets: action.payload };
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

export const addServerTickets = (payload) => ({ type: ADD_TICKETS, payload });
export const sortTicketsByPrice = (payload) => ({ type: SORT_PRICE, payload });
export const sortTicketsByTime = (payload) => ({ type: SORT_TIME, payload });
