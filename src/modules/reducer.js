import produce from 'immer';
import { createActions } from 'reduxsauce';
import get from 'lodash/get';

export const { Types: actionTypes, Creators: actionCreators } = createActions({
  requestGetApi: ['searchKey'],
  successGetApi: ['data'],
  failureGetApi: ['error']
});
export const initialState = { searchKey: null, searchData: [], searchError: null };

/* eslint-disable default-case, no-param-reassign */
export const actionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.REQUEST_GET_API:
        draft.searchKey = action.searchKey;
        break;
      case actionTypes.SUCCESS_GET_API:
        draft.searchData = action.data;
        break;
      case actionTypes.FAILURE_GET_API:
        draft.searchError = get(action.error, 'message', 'something_went_wrong');
        break;
    }
  });

export default actionReducer;