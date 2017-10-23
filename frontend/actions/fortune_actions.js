export const RECEIVE_FORTUNE = "RECEIVE_FORTUNE";
export const RECEIVE_FORTUNES = "RECEIVE_FORTUNES";

import * as APIUtil from '../util/fortune_api_util';

export const receiveFortune = fortune =>({
  type: RECEIVE_FORTUNE,
  fortune
});

export const receiveFortunes = fortunes => ({
  type: RECEIVE_FORTUNES,
  fortunes
});

export const fetchFortune = id => dispatch =>(
  APIUtil.fetchFortune(id).then(fortune =>(
    dispatch(receiveFortune(fortune))
  ))
);

export const fetchFortunes = filters => dispatch =>(
  APIUtil.fetchFortunes(filters).then(groupes =>(
    dispatch(receiveFortunes(groupes))
  ))
);
