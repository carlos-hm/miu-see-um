import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//import Navbar from './componets/styled-components/Navbar';
import SignupContainer from './components/Signup/Signup';
import LoginContainer from './components/Login/Login'
import Home from './components/Home';

function Routes() {
  return (
    <BrowserRouter>
      {/* <Navbar> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
      {/* </Navbar> */}
    </BrowserRouter>
  )
};

export default Routes;