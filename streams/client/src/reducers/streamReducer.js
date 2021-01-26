import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return action.payload.reduce((map, item) => ({ ...map, [item.id]: item }), {});
    //   return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload); // lodash omit() func won't mutate the original state obj
    default:
      return state;
  }
};

// mapKeys(streams, 'id')
// Will take in an array and return a new object.
// The keys of the object will be taken from the 'id'
// property from each newly created object

export default streamReducer;
