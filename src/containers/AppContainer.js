import React from 'react'
import CanvasContainer from '../containers/CanvasContainer'
import { connect } from 'react-redux'
import NoteContainer from '../containers/NoteContainer'

const App = ({notes, selection, setMultipleSelection, copySelection, pasteSelection}) => (
  <div>
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
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

