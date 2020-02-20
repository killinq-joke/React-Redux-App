import * as types from "./actionTypes";
import axios from "axios";

const charactersAPI = "https://rickandmortyapi.com/api/character";
const locationsAPI = "https://rickandmortyapi.com/api/location";

export const fetchCharacters = () => dispatch => {
  dispatch({ type: types.FETCH_CHARACTERS_START });
  dispatch({ type: types.SPINNER_START });
  axios
    .get(charactersAPI)
    .then(res => {
      dispatch({ type: types.SET_FETCHED_CHARACTERS, payload: res.data });
    })
    .catch(err => {
      debugger;
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP });
    });
};

export const handleButton = page => dispatch => {
  dispatch({ type: types.FETCH_CHARACTERS_START });
  dispatch({ type: types.SPINNER_START });
  axios
    .get(page)
    .then(res => {
      dispatch({ type: types.SET_FETCHED_CHARACTERS, payload: res.data });
    })
    .catch(err => {
      debugger;
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP });
    });
};

export const fetchLocations = () => dispatch => {
    dispatch({ type: types.FETCH_LOCATIONS_START});
    dispatch({ type: types.SPINNER_START });
    axios
    .get(locationsAPI)
    .then(res => {
      console.log(res)
      dispatch({ type: types.SET_FETCHED_LOCATIONS, payload: res.data });
    })
    .catch(err => {
      debugger;
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP });
    });
}