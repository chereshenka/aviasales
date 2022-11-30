const initialState = {
  spinner: true,
};
const SET_SPINNER = "SET_SPINNER";
export const spinnerState = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPINNER:
      return {
        ...state,
        spinner: action.payload,
      };
    default:
      return state;
  }
};

export const setSpinnerState = (payload) => ({ type: SET_SPINNER, payload });
