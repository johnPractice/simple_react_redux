import { createStore } from "redux";
import rootReducer from "../reducer/reducer";

// initial state
const initialState = { add: 0 };

export default createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
