import { connect } from 'react-redux';
import NoteState from '../actions/NoteState';
import Note from '../components/Note';
import doubleClickBehavior from '../components/DoubleClickBehavior';
import { setEditModeNote, updateNote} from '../actions';


const mapStateToProps = (state, ownProps) => {
    return {
        editable: NoteState.EDITABLE === ownProps.state,
        textValue: ownProps.text
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChangeText: (event) => {
        dispatch(updateNote(ownProps.id, event.target.value));
    },

    onTrustDoubleClick: (event) => {
        dispatch(setEditModeNote(ownProps.id));

    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(doubleClickBehavior(Note));