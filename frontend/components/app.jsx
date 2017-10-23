
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import FortuneShow from './fortunes_container';
import Splash from './splash';
const App = () => (

  <div className='maxin'>
    <header className='header'>
      <div className='headerleft'></div>
      <div className='headermid'>Fortune Cookie</div>
      <div className='headerright'></div>
    </header>
      <Switch>
      <Route exact path="/" component={FortuneShow}/>
      <Route exact path="/fortune" component ={FortuneShow}/>
      </Switch>
    <footer className='footer'>
      <a className='linkedin' href= 'https://www.linkedin.com/in/joshuaschen/'>  <img className='logo' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1508757600/In-White-41px-R_kvf4ns.png'></img></a>


    </footer>
  </div>

);



  export default App;
