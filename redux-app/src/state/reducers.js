import * as types from "./actionTypes";

// {
//     characters: [],
//     spinnerOn: false,
// }

const initialStateCharacters = [];
export function charactersReducer(state = initialStateCharacters, action) {
  switch (action.type) {
    case types.SET_FETCHED_CHARACTERS:
      return action.payload;
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
