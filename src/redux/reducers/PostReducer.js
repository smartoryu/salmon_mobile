import {GET_POST_LIST, REFRESHING} from '../../helpers/types';

const INITIAL_STATE = {
  Refresh: false,
  PostList: [],
  loading: true,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case REFRESHING:
      return {...state, Refresh: true};
    case GET_POST_LIST:
      return {...state, loading: false, Refresh: false, PostList: payload};

    default:
      return state;
  }
};
