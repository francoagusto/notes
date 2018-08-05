import * as ACTIONS from "../actions/actionTypes"
import NoteState from "../actions/NoteState"


const notes = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTE:
      const nextId = Object.keys(state).length
      var newObject = {}
      newObject[nextId] = {
        id: nextId,
        text: action.text,
        state: NoteState.IDLE,
        position: action.position
      };

      return Object.assign(newObject, state)

    default:
      return state;
  }
}

export default notes;
