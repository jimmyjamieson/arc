import { combineReducers } from 'redux';

import app from './app';
import people from './people';

const RootReducer = combineReducers({
  app,
  people,
});

export default RootReducer;

