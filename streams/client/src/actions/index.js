import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// Using redux thunk middleware to handle create an async action creator
export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const res = await streams.post("/streams", { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: res.data });

    // Do some programmatic navigation to get the user back to the root route
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const res = await streams.get("/streams");

    dispatch({ type: FETCH_STREAMS, payload: res.data });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const res = await streams.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: res.data });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const res = await streams.put(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: res.data });
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
  };
};