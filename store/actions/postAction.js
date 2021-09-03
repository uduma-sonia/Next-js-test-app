import * as types from "../types";
import axios from "axios";

export const fetchPost = () => async (dispatch) => {
  const res = await axios.get("https://rickandmortyapi.com/api/character");

  dispatch({
    type: types.GET_POST,
    payload: res.data,
  });
};
