import { addServerTickets } from "../redux/ticket-state";

export const fetchTickets = (key, serverLink) => {
  return async function (dispatch) {
    const url = new URL("tickets?", serverLink);
    const params = new URLSearchParams({
      searchId: key,
    });
    await fetch(url + params.toString())
      .then((response) => response.json())
      .then((json) => {
        dispatch(addServerTickets(json.tickets));
      });
  };
};
