import * as types from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  data: [],
  post: {},
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case types.GET_POST:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
