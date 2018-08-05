import * as ACTIONS from "../actions/actionTypes"
import NoteState from "../actions/NoteState"

const notes = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTE:
      const nextId = Object.keys(state).length;
      var newObject = {}
      newObject[nextId] = {
        id: nextId,
        text: action.text,
        state: NoteState.IDLE,
        position: action.position
      };

      return Object.assign(newObject, state)

    case ACTIONS.UPDATE_NOTE:
      state[action.id].text = action.text;
      return Object.assign({}, state);

    case ACTIONS.SET_EDIT_MODE:

      if (state[action.id].state !== NoteState.EDITABLE) {
        state[action.id] = { ...state[action.id], state: NoteState.EDITABLE };
        return  {...state};
      }
      return state;

    case ACTIONS.SET_ALL_IDLE:

      return Object.keys(state).reduce((obj, key) => {
        obj[key] = { ...state[key], state: NoteState.IDLE };
        return obj;
      }, {});

    case ACTIONS.ADD_NOTES:
      var index = Object.keys(state).length;

      return action.notes.reduce((obj, item) => {
        obj[index] = { ...item, id: index };
        index++;
        return obj;
      }, { ...state });

    default:
      return state;
  }
}

export default notes;
