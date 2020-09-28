import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import actionReducer from '../modules/reducer';
import actionSaga  from '../saga/saga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    actionReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(actionSaga)

export default store