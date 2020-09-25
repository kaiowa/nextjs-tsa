import comparadorReducer from './comparadorReducer';
import {combineReducers} from 'redux';

//Imp when we have more reducer components 
const rootReducer = combineReducers({
    counter: comparadorReducer 
});

export default rootReducer;