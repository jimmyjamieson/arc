import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import app from './app';
import people from './people';

const RootReducer = combineReducers({
  form,
  app,
  people,
});

export default RootReducer;

