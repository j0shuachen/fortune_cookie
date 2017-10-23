import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  // ReactDOM.render(<div><h1>React Working</h1> <h2>5-0</h2></div>, root);
  ReactDOM.render(<Root store ={store}/>, root);

});

import {fetchFortune, fetchFortunes} from './util/fortune_api_util';
window.fetchFortune = fetchFortune;
window.fetchFortunes = fetchFortunes;
