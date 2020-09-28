import { put, call, takeLatest } from 'redux-saga/effects';
import { getSongs } from '../modules/repoApi';
import { actionTypes, actionCreators } from '../modules/reducer';

const { REQUEST_GET_API } = actionTypes;
const { successGetApi, failureGetApi } = actionCreators;
export function* getSongList(action) {
  const response = yield call(getSongs, action.searchKey);
  const { data, ok } = response;
  if (ok) {
    console.log("ok data", data);
    yield put(successGetApi(data));
    
  } else {
    console.log("failed data");
    yield put(failureGetApi(data));
    
  }
}
// Individual exports for testing
export default function* actionSaga() {
  yield takeLatest(REQUEST_GET_API, getSongList);
}