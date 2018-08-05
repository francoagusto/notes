//not used yet
import { connect } from 'react-redux';
import { addNote } from '../actions';
import Canvas from '../components/Canvas';



const mapDispatchToProps = (dispatch, ownProps) => ({
  onDoubleClick: (event) => {
      dispatch(addNote({x: event.clientX, y: event.clientY}))
  }
});


export default connect(
  null,
  mapDispatchToProps
)(Canvas);

