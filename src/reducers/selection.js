import * as ACTIONS from "../actions/actionTypes"

const initialState = { selected: [], multipleSelection: false };

const selection = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SELECT_NOTE:

      var selected = state.selected;
      if (state.multipleSelection) {
        const index = selected.indexOf(action.id);
        selected = (index >= 0) ? [...selected.slice(0, index), ...selected.slice(index + 1, selected.length)] : [...selected, action.id];
        return { ...state, selected: selected };
      }
      selected = (selected.indexOf(action.id) >= 0) ? [] : [action.id];
      return { ...state, selected: selected };

    case ACTIONS.UNSELECT_ALL_NOTES:
      return { ...state, selected: (action.exceptions || []).filter(id => state.selected.indexOf(id) >= 0) };

    case ACTIONS.SET_ENABLED_MULTIPLE_SELECTION:
      if (state.multipleSelection !== action.value) {
        return { ...state, multipleSelection: action.value }
      }
      return state;
    
    default:
      return state;
  }
};

export default selection;
