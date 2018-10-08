import { combineReducers } from 'redux';
import { bill } from './bill';
import { ui } from './ui';
import { loader } from './loader';

export default combineReducers({
  ui,
  bill,
  loader
});
