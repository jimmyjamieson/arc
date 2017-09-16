import { combineReducers } from 'redux';

import { list } from './list';

const people = combineReducers({
  list,
});

export default people;
