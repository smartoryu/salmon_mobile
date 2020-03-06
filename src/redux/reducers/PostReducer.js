import {GET_POST_LIST} from '../../helpers/types';

const INITIAL_STATE = {
  PostList: [],
  loading: true,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case GET_POST_LIST:
      return {...state, loading: false, PostList: payload};

    default:
      return state;
  }
};
