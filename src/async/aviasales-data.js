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
    url.searchParams.set("searchId", searchKey);
    // const params = new URLSearchParams({
    //   searchId: searchKey,
    // });
    let spinnerStatus = true;
    try {
      while (spinnerStatus) {
        const requestServer = await fetch(url);

        if (requestServer.status === 500) {
          requestServer;
        } else if (requestServer.status !== 200) {
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
    } catch (e) {
      dispatch(setAlertState(true));
      dispatch(setSpinnerState(false));
    }
  };
}
