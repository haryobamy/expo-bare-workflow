import {apiReducer, apiReducerPath} from './slice';
import {combineReducers} from 'redux';

export default combineReducers({
  [apiReducerPath]: apiReducer,
});
