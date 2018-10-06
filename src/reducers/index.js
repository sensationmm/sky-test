import { combineReducers } from 'redux';
import { bill } from './bill';
import { ui } from './ui';

export default combineReducers({
  ui,
  bill
});
