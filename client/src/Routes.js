import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//import Navbar from './componets/styled-components/Navbar';
import SignupContainer from './components/Signup/Signup';
import LoginContainer from './components/Login/Login'
import Home from './components/Home';
import Museum from './pages/Museum/index';

function Routes() {
  return (
    <BrowserRouter>
      {/* <Navbar> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/:id" component= {Museum}/>
        </Switch>
      {/* </Navbar> */}
    </BrowserRouter>
  )
};

export default Routes;