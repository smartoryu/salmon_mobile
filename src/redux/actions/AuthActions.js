import AsyncStorage from '@react-native-community/async-storage';

import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../../helpers/types';
import {Alert} from 'react-native';

// export const isAlreadyLogin = () => {
//   return async dispatch => {
//     try {
//       const username = await AsyncStorage.getItem('username');
//       if (username) {
//         setTimeout(() => {
//           dispatch({type: LOGIN_SUCCESS, payload: {username}});
//         }, 1000);
//       } else {
//         dispatch({type: LOGIN_FAILED});
//       }
//     } catch (err) {
//       dispatch({type: LOGIN_FAILED});
//       console.log(err);
//     }
//   };
// };

export const isAlreadyLogin = ({username}) => {
  return dispatch => {
    if (username) {
      dispatch({type: LOGIN_SUCCESS, payload: {username}});
    } else {
      dispatch({type: LOGIN_FAILED});
    }
  };
};

export const onUserLogin = ({username}) => {
  return async dispatch => {
    dispatch({type: LOGIN_START});
    if (username !== '') {
      await AsyncStorage.setItem('username', username);

      setTimeout(() => {
        dispatch({type: LOGIN_SUCCESS, payload: {username}});
      }, 1500);
    } else {
      dispatch({type: LOGIN_FAILED});
      // setTimeout(() => {
      Alert.alert(
        '',
        'Input username!',
        [
          // {text: 'Ask me later', onPress: () => console.log('later pressed')},
          // {text: 'Cancel', onPress: () => console.log('cancel pressed')},
          {text: 'Ok', onPress: () => console.log('ok pressed')},
        ],
        {cancelable: false},
      );
      // }, 200);
    }
  };
};

export const onUserLogout = () => {
  return async dispatch => {
    try {
      await AsyncStorage.removeItem('username');
      dispatch({type: USER_LOGOUT});
    } catch (err) {
      console.log(err);
    }
  };
};
