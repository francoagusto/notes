import { combineReducers } from 'redux';
import notes from './notes'
import selection from './selection'

export default combineReducers({
  notes, 
  selection
});
