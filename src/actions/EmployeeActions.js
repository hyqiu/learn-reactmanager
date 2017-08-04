import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';

// Action creators
export const employeeUpdate =({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    // {prop, value} : JS object with key values of prop and value
    // prop: name, phone, shift
    payload: {prop, value}
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
      });
  };
};
