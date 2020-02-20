import * as types from "./actionTypes";

const initialStateCharacters = {
  next: "",
  prev: "",
  characters: []
};
export function charactersReducer(state = initialStateCharacters, action) {
  switch (action.type) {
    case types.SET_FETCHED_CHARACTERS:
      return {
        ...state,
        next: action.payload.info.next,
        prev: action.payload.info.prev,
        characters: action.payload.results
      }; 
    case types.FETCH_CHARACTERS_START:
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

const initialStateLocations = {
    next: "",
    prev: "",
    locations: []
  };

export function locationReducer(state = initialStateLocations, action) {
    switch (action.type) {
      case types.SET_FETCHED_LOCATIONS:
        return {
          ...state,
          next: action.payload.info.next,
          prev: action.payload.info.prev,
          locations: action.payload.results
        }; 
      case types.FETCH_LOCATIONS_START:
        return state;
      default:
        return state;
    }
  }