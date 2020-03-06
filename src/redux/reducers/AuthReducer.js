import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../../helpers/types';

const INITIAL_STATE = {
  user: null,

  loading: false,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case LOGIN_START:
      return {...state, loading: true};
    case LOGIN_FAILED:
      return INITIAL_STATE;
    case LOGIN_SUCCESS:
      return {...INITIAL_STATE, user: payload};

    case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};
