import { combineReducers, createStore } from "redux";
import itemReducer from "./items/reducer";
import tipPercentageReducer from "./tip-percentage/reducer";

const reducer = combineReducers({
  items: itemReducer,
  tipPercentage: tipPercentageReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
