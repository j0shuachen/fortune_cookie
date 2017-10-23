import {combineReducers} from 'redux';
import FortunesReducer from './fortunes_reducer';

const RootReducer = combineReducers({
  fortunes: FortunesReducer


});


export default RootReducer;
