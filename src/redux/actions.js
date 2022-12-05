import {
  ADD_TICKETS,
  SORT_PRICE,
  SORT_TIME,
  SET_ALERT,
  ADD_FILTER,
  SET_SPINNER,
  FILTER_CATEGORY,
} from "./types";

//ticket-station actions
export const addServerTickets = (payload) => ({
  type: ADD_TICKETS,
  payload,
});
export const sortTicketsByPrice = (payload) => ({
  type: SORT_PRICE,
  payload,
});
export const sortTicketsByTime = (payload) => ({
  type: SORT_TIME,
  payload,
});
export const filterTicketsByCategory = (payload) => ({
  type: FILTER_CATEGORY,
  payload,
});

//alert-box
export const setAlertState = (payload) => ({ type: SET_ALERT, payload });

//filter-state
export const addFilterInArray = (payload) => ({ type: ADD_FILTER, payload });

//spinner-loader
export const setSpinnerState = (payload) => ({ type: SET_SPINNER, payload });
