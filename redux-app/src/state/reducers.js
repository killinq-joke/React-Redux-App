import * as types from "./actionTypes";

const initialStateData = {
    next: '',
    prev: '',
    characters: []
}
export function dataReducer(state = initialStateData, action) {
  switch (action.type) {
    case types.SET_FETCHED_DATA:
      return {
          ...state,
          next: action.payload.info.next,
          prev: action.payload.info.prev,
          characters: action.payload.results
      } //{...state, next: action.payload.info.next, prev: action.payload.info.prev , characters: action.payload.results}
    case types.FETCH_DATA_START:
      return state;
    default:
      return state;
  }
}

const initialStateSpinner = false;
export function spinnerReducer(state = initialStateSpinner, action) {
  switch (action.type) {
    case types.SPINNER_START:
      return true;
    case types.SPINNER_STOP:
      return false;
    default:
      return state;
  }
}
