import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { tabState } from "./tab-state";
import { ticketState } from "./ticket-state";
import { filterState } from "./filter-state";

const rootReducer = combineReducers({
  tab: tabState,
  tickets: ticketState,
  filter: filterState,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
