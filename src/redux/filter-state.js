const initialState = {
  filter: [],
};
const ADD_FILTER = "ADD_FILTER";
export const filterState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filter: state.filter.includes(action.payload)
          ? state.filter.filter((el) => el !== action.payload)
          : [...state.filter, action.payload],
      };
    default:
      return state;
  }
};

export const addFilterInArray = (payload) => ({ type: ADD_FILTER, payload });
