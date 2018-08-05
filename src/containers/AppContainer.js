import React from 'react'
import CanvasContainer from '../containers/CanvasContainer'
import { connect } from 'react-redux'
import NoteContainer from '../containers/NoteContainer'
import DocumentEventHandler from '../components/DocumentEventHandler'
import { setEnabledMultipleSelection } from '../actions'


const App = ({notes, selection, setMultipleSelection, copySelection, pasteSelection}) => (
  <div>
    <DocumentEventHandler event="keydown" validator={event => event.shiftKey} handler={e => setMultipleSelection(true)} />
    <DocumentEventHandler event="keyup" validator={event => !event.shiftKey} handler={e => setMultipleSelection(false)} />
    <CanvasContainer>
      {Object.keys(notes).map(key =>
        <NoteContainer
          {...notes[key]}
          key={key}
        />
      )}
    </CanvasContainer>
  </div>
);


const mapStateToProps = (state, ownProps) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setMultipleSelection: (value) => dispatch(setEnabledMultipleSelection(value))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

