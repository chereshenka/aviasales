const initialState = {
  alert: false,
};

const SET_ALERT = "SET_ALERT";

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

export const setAlertState = (payload) => ({ type: SET_ALERT, payload });
