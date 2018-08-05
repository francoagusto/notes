import { connect } from 'react-redux';
import NoteState from '../actions/NoteState';
import Note from '../components/Note';
import doubleClickBehavior from '../components/DoubleClickBehavior';
import { unselectAllNotes, toggleSelectNote, setEditModeNote, updateNote, setAllNotesIdle } from '../actions';


const mapStateToProps = (state, ownProps) => {
    return {
        editable: NoteState.EDITABLE === ownProps.state,
        textValue: ownProps.text,
        selected: (state.selection.selected || []).includes(ownProps.id)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeText: (event) => {
        dispatch(updateNote(ownProps.id, event.target.value));
    },

    onTrustDoubleClick: (event) => {
        dispatch(unselectAllNotes());
        dispatch(setAllNotesIdle());
        dispatch(setEditModeNote(ownProps.id));

    },
 
    onTrustClick: () => {
        const id = ownProps.id;
        dispatch(setAllNotesIdle());
        dispatch(toggleSelectNote(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(doubleClickBehavior(Note));