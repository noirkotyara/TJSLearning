import React, { useContext, useEffect } from 'react';
import './App.scss';
import NavbarComp from './components/Navbar';
import { Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import { AlertState } from './context/alert/AlertState';
import Switch from 'react-bootstrap/esm/Switch';
import { FirebaseState } from './context/firebase/FirebaseState';
import { FirebaseContext } from './context/firebase/firebaseContext';
const _ = require('lodash');

let App = () => {
  
  return (<div className='container'>
    <FirebaseState>
      <AlertState>
        <NavbarComp />
        <div className='content'>
          <Switch>
            <Route path={'/about'} component={() => <About />} />
            <Route exact path={'/'} component={() => <Home />} />
          </Switch>
        </div>
      </AlertState>
    </FirebaseState>
  </div>)
}

export default App;
