// @flow
import { getPeople } from '../../services/api/People';

// Actions

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PEOPLE_ERROR = 'FETCH_PEOPLE_ERROR';
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';

export function setPeopleStart() {
  return {
    type: FETCH_PEOPLE,
  };
}

export function setPeopleSuccess(data: Object) {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    data,
  };
}

export function setPeopleError(error: Object) {
  return {
    type: FETCH_PEOPLE_ERROR,
    error,
  };
}

export function fetchPeople(params: Object) {
  return async (dispatch: Function) => {
    try {
      dispatch(setPeopleStart());
      const query = await getPeople(params);
      const data = await query.data;
      dispatch(setPeopleSuccess(data));
    } catch (err) {
      dispatch(setPeopleError(err));
    }
  };
}

// Reducer

const initialState = {
  loading: false,
  data: [],
  error: [],
};

export function list(state:Object = initialState, action:Function) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case FETCH_PEOPLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

