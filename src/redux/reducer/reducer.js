import { ADD_COUNTER } from "../Actions/addCounter";
import { DEC_COUNTER } from "../Actions/decreaseCounter";
const initialState = { add: 0 };
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return { add: state.add + action.add };
    case DEC_COUNTER:
      return { add: state.add + action.add };
    default:
      return state;
  }
}

export default rootReducer;
