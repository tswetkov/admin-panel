import { request } from 'api/client';
import { Person } from 'components/EmployeeCard';
import { Dispatch } from 'redux';

import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
} from '../actionTypes';

export const addUserStart = () => ({
  type: ADD_USER_START,
});

export const addUserSuccess = (payload: Person) => ({
  type: ADD_USER_SUCCESS,
  payload,
});

export const addUserFail = (payload: Person) => ({
  type: ADD_USER_FAIL,
  payload,
});

export const addUser = (data: Person) => async (dispatch: Dispatch) => {
  dispatch(addUserStart());
  try {
    const response = await request.post('add-user/', data);
    const { data: payload } = response;
    dispatch(addUserSuccess(payload));
  } catch (error) {
    dispatch(addUserFail(error));
  }
};
