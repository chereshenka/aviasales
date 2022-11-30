import { addServerTickets } from "../redux/ticket-state";
import { setSpinnerState } from "../redux/spinner-loader";
import { setAlertState } from "../redux/alert-box";

export const fetchTickets = (key, serverLink) => {
  return async function (dispatch) {
    const url = new URL("tickets?", serverLink);
    const params = new URLSearchParams({
      searchId: key,
    });
    let res = false;
    while (!res) {
      await fetch(url + params.toString())
        .then((response) => response.json())
        .then((json) => {
          if (json.tickets.length === 0) {
            dispatch(setAlertState(true));
          }
          dispatch(addServerTickets(json.tickets));
          if (json.stop) {
            dispatch(setSpinnerState(false));
            res = true;
          }
        })
        .catch(dispatch(setAlertState(true)));
    }
  };
};
