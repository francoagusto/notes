import { connect } from 'react-redux';
import NoteState from '../actions/NoteState';
import Note from '../components/Note';


const mapStateToProps = (state, ownProps) => {
    return {
        editable: NoteState.EDITABLE === ownProps.state,
        textValue: ownProps.text
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Note);