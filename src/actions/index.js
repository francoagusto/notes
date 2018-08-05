import * as ActionTypes from "./actionTypes";

//Actions builders
export const addNote = (position, text = "") => ({
  type: ActionTypes.ADD_NOTE,
  position: position,
  text: text
});

export const updateNote = (id, text) => ({
  type: ActionTypes.UPDATE_NOTE,
  id: id,
  text: text
});

export const setEditModeNote = (id) => ({
  type: ActionTypes.SET_EDIT_MODE,
  id: id
});

export const setAllNotesIdle = () => ({
  type: ActionTypes.SET_ALL_IDLE
});


//selection actions:
export const toggleSelectNote = (id) => ({
  type: ActionTypes.TOGGLE_SELECT_NOTE,
  id: id
});

export const unselectAllNotes = (ids) => ({
  type: ActionTypes.UNSELECT_ALL_NOTES,
  exceptions: ids
});
