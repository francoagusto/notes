import * as ActionTypes from "./actionTypes";


export const addNote = (position, text = "") => ({
  type: ActionTypes.ADD_NOTE,
  position: position,
  text: text
});