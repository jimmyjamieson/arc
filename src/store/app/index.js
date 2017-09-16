// @flow

// Actions
export const TOGGLE_NAV = 'TOGGLE_NAV';
export const TOGGLE_NOTIFICATIONS = 'TOGGLE_NOTIFICATIONS';
export const TOGGLE_CHAT = 'TOGGLE_CHAT';
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const SELECT_THEME = 'SELECT_THEME';

export function setNav() {
  return {
    type: TOGGLE_NAV,
  };
}

export function toggleNav() {
  return async (dispatch: Function) => {
    dispatch(setNav());
  };
}

// Reducer
const initialState = {
  isNavOpen: false,
  isNotificationsOpen: false,
  isChatOpen: false,
  isSearchOpen: false,
  auth: {
    token: 'some-token',
    group: 'admin',
    firstName: 'Ian',
    lastName: 'Jamieson',
  },
  settings: {
    theme: 'light',
    view: 'cards',
  },
};

export default function app(state:Object = initialState, action:Function) {
  switch (action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };
    case TOGGLE_NOTIFICATIONS:
      return {
        ...state,
        isNotificationsOpen: !state.isNotificationsOpen,
      };
    case TOGGLE_CHAT:
      return {
        ...state,
        isChatOpen: !state.isChatOpen,
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen,
      };
    case SELECT_THEME:
      return {
        ...state,
        settings: { theme: action.theme },
      };
    default:
      return state;
  }
}

