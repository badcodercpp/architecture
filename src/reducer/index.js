
import { combineReducers } from 'redux';
import demoReducer from './demoReducer';
import homeReducer from './homeReducer';

export default combineReducers({
    demoReducer,
    homeReducer
})