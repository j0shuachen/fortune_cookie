import merge from 'lodash/merge';
import {
  RECEIVE_FORTUNE,
  RECEIVE_FORTUNES ,

} from '../actions/fortune_actions.js';


const initialState = Object.freeze({
  errors: [],
});

const FortunesReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_FORTUNES:
    // console.log(action);
      return action.fortunes;
    case RECEIVE_FORTUNE:
      const newFortune= {[action.fortune.id]: action.fortune};
      return newFortune;
    default:
    return state;
  }
};

export default FortunesReducer;
