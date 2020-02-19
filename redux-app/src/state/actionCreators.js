import * as types from './actionTypes';
import axios from 'axios';

const characterAPI = "https://rickandmortyapi.com/api/character"

export const fetchCharacters = () => dispatch => {
    dispatch({type: types.FETCH_CHARACTERS_START})
    dispatch({type: types.SPINNER_START})
    axios
    .get(characterAPI)
    .then(res => {
        console.log(res)
        dispatch({type: types.SET_FETCHED_CHARACTERS, payload: res.data.results})
    })
    .catch(err => {
        debugger
    })
    .finally(() => {
        dispatch({type: types.SPINNER_STOP})
    })
}