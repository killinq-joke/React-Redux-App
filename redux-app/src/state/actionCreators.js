import * as types from "./actionTypes";
import axios from "axios";

const characterAPI = "https://rickandmortyapi.com/api/character";

export const fetchData = () => dispatch => {
  dispatch({ type: types.FETCH_DATA_START });
  dispatch({ type: types.SPINNER_START });
  axios
    .get(characterAPI)
    .then(res => {
      dispatch({ type: types.SET_FETCHED_DATA, payload: res.data });
    })
    .catch(err => {
      debugger;
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP });
    });
};

export const handleButton = page => dispatch => {
  dispatch({ type: types.FETCH_DATA_START });
  dispatch({ type: types.SPINNER_START });
  axios
    .get(page)
    .then(res => {
      dispatch({ type: types.SET_FETCHED_DATA, payload: res.data });
    })
    .catch(err => {
      debugger;
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP });
    });
};
