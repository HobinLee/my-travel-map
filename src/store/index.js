import { combineReducers } from 'redux';

import map from './modules/map';
import mode from './modules/mode';

const rootReducer = combineReducers({
  map,
  mode
});

export default rootReducer;