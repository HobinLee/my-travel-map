import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import map from './modules/map';
import mode from './modules/mode';
import filter from './modules/filter';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["map"]
}

const rootReducer = combineReducers({
  map,
  mode,
  filter,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;