import * as ACTIONS from "../actions/actionTypes"


const clipboard = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.COPY_SELECTION:
            return Object.keys(action.notes).reduce((total, key) => {
                const note = action.notes[key];
                if (action.selection.indexOf(note.id) >= 0 ) {
                    total.push({...note, position: {...note.position}});
                }
                return total;
            }, []);

        default:
            return state;
    }
};

export default clipboard;
