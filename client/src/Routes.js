import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//import Navbar from './componets/styled-components/Navbar';
import SignupContainer from './components/Signup/Signup';
import LoginContainer from './components/Login/Login'
import Home from './components/Home';
import Museum from './pages/Museum/MuseumDetail';
import Halls from './pages/Museum/Halls';
import Artwork from './pages/Museum/ArtworkDetail';
import Map from './pages/Museum/Map';


function Routes() {
  return (
    <BrowserRouter>
      {/* <Navbar> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/detail/:id" component= {Museum}/>
          <Route exact path="/:id" component = {Halls}/>
          <Route exact path="/artwork/:id" component = {Artwork}/>
          <Route exact path="/map/:id" component = {Map}/>
        </Switch>
      {/* </Navbar> */}
    </BrowserRouter>
  )
};

export default Routes;