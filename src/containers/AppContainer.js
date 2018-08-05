import React from 'react'
import CanvasContainer from '../containers/CanvasContainer'
import { connect } from 'react-redux'
import NoteContainer from '../containers/NoteContainer'
import DocumentEventHandler from '../components/DocumentEventHandler'
import { setEnabledMultipleSelection, copySelection, addNotes } from '../actions'


const COPY_KEY_CODE = 67; //C
const PASTE_KEY_CODE = 86; //V
const OFFSET_PASTE = 20;

const App = ({notes, selection, setMultipleSelection, copySelection, pasteSelection, clipboardNotes}) => (
  <div>
    <DocumentEventHandler event="keyup" handler={copySelection(notes, selection)} validator={event => event.keyCode === COPY_KEY_CODE && event.ctrlKey} />
    <DocumentEventHandler event="keyup" handler={pasteSelection(clipboardNotes)} validator={event => event.keyCode === PASTE_KEY_CODE && event.ctrlKey} />
    <DocumentEventHandler event="keydown" validator={event => event.shiftKey} handler={e => setMultipleSelection(true)} />
    <DocumentEventHandler event="keyup" validator={event => !event.shiftKey} handler={e => setMultipleSelection(false)} />
    <CanvasContainer>
      {Object.keys(notes).map(key =>
        <NoteContainer
          key={key}
          {...notes[key]}
        />
      )}
    </CanvasContainer>
  </div>
);


const mapStateToProps = (state, ownProps) => ({
  notes: state.notes,
  selection: state.selection.selected,
  clipboardNotes: state.clipboard
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setMultipleSelection: (value) => dispatch(setEnabledMultipleSelection(value)),

  copySelection: (notes, selection) => {
    return () => {
      dispatch(copySelection(notes, selection))
    }
  },

  pasteSelection: (notes) => {
    return () => {

      dispatch(addNotes(notes.map(note => {
        var newNote = { ...note };
        newNote.position = { x: note.position.x + OFFSET_PASTE, y: note.position.y + OFFSET_PASTE };
        return newNote;
      })));
    }
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

