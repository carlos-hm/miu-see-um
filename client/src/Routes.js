import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Navbar from './componets/styled-components/Navbar';
import SignupContainer from './components/Signup/Signup';
import LoginContainer from './components/Login/Login'
import Home from './components/Home';
import Museum from './pages/Museum/MuseumDetail';
import Halls from './pages/Museum/Halls';
import Artwork from './pages/Museum/ArtworkDetail';
import Map from './pages/Museum/Map';
import UserMuseum from './pages/User/UserMuseum';
import EditMuseum from './pages/User/EditMuseum';
import EditArtwork from './pages/User/EditArtwork';
import AddArtwork from './pages/User/AddArtwork';
import EditHall from './pages/User/EditHall';
import AddHallComp from './components/User/AddHallComp';


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
          <Route exact path="/profile/:id" component = { UserMuseum }/>
          <Route exact path="/profile/:id/edit" component = { EditMuseum }/>
          <Route exact path="/artwork/:id/edit" component = { EditArtwork}/>
          <Route exact path="/hall/:id" component = { AddArtwork }/>
          <Route exact path="/hall/:id/edit" component = { EditHall }/>
          <Route exact path="/hall/:id/new-hall" component = { AddHallComp }/>
        </Switch>
      {/* </Navbar> */}
    </BrowserRouter>
  )
};

export default Routes;