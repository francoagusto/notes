import { combineReducers } from 'redux';
import notes from './notes'
import selection from './selection'
import clipboard from './clipboard'

export default combineReducers({
  notes, 
  selection,
  clipboard
});
