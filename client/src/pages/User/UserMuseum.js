import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuseumDetailComp from '../../components/Museum/MuseumDetail';
import MuseumService from '../../services/MuseumService';
import {UserDashboard} from '../../styles/componets';
import UserHallComp from '../../components/User/UserHallComp';
import AddHallComp from '../../components/User/AddHallComp';


const museumService = new MuseumService();

export default class UserMuseum extends Component{
  state = {};

  async componentDidMount() {
    const {id} = this.props.match.params
    const {
      data: { museum }
    } = await museumService.getMuseum(id)
    const {
      data: { halls }
    } = await museumService.getHalls(id)
    this.setState({ halls, museum })
  }
  
 
  render() {
    const { museum } = this.state;
    console.log(museum)
    const { halls } = this.state;
    const { id } = this.props.match.params
    console.log(halls)
    return(
      <UserDashboard>
      <section>
      <Link to={`/profile/${id}/edit`}>edit museum</Link>
        { (museum) ?
          <MuseumDetailComp 
            name = { museum.name }
            photoURL = { museum.photoURL }
            description = { museum.description }
            address = { museum.address }
            ticket = { museum.ticket }
            hours = { museum.hours }
          /> : null
        }
      </section>
      <section>
      <h2>halls</h2>
      <Link to={`/`}>
        <small>add</small>
      </Link>
      <AddHallComp 
            museumID = {id}
          />
        { (halls) ?
          halls.map (hall => (
            <UserHallComp
              name = {hall.name}
              artworks = {hall.artworks}
              hallID = {hall._id}
            />
        )): null }
      </section>
      </UserDashboard>
    )
  }
}