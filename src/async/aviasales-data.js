import {
  addServerTickets,
  setSpinnerState,
  setAlertState,
} from "../redux/actions";

//long-polling

export function fetchTickets(key, link) {
  return async function (dispatch) {
    const serverUrl = link;
    const searchKey = key;
    const url = new URL("tickets?", serverUrl);
    const params = new URLSearchParams({
      searchId: searchKey,
    });
    let spinnerStatus = true;
    while (spinnerStatus) {
      const requestServer = await fetch(url + params.toString());

      if (requestServer.status === 500) {
        requestServer;
      } else if (requestServer.status !== 200) {
        dispatch(setAlertState(true));
        dispatch(setSpinnerState(false));
        throw new Error(requestServer.statusText);
      } else {
        const res = requestServer.json();
        res.then((json) => {
          if (json.tickets.length === 0) {
            dispatch(setAlertState(true));
          }
          dispatch(addServerTickets(json.tickets));
          if (json.stop) {
            dispatch(setSpinnerState(false));
            spinnerStatus = false;
          }
        });
      }
    }
  };
}
