import { combineReducers } from 'redux';

import map from './modules/map';
import mode from './modules/mode';
import filter from './modules/filter';

const rootReducer = combineReducers({
  map,
  mode,
  filter,
});

export default rootReducer;