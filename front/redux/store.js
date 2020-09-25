import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';

//Global state created 
const store = createStore(rootReducer);

export default store;
