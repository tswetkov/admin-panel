import {
  FETCH_STAFF_LIST_START,
  FETCH_STAFF_LIST_SUCCESS,
  FETCH_STAFF_LIST_FAIL,
} from '../actionTypes';

export const fetchStaffListStart = () => ({
  type: FETCH_STAFF_LIST_START,
});

export const fetchStaffListSuccess = (payload: any) => ({
  type: FETCH_STAFF_LIST_SUCCESS,
  payload,
});
export const fetchStaffListFail = (payload: any) => ({
  type: FETCH_STAFF_LIST_FAIL,
  payload,
});

export const fetchStaffList = () => (dispatch: any) =>
  dispatch(fetchStaffListStart());
