import React, { Component } from 'react';
import MuseumDetailComp from '../../components/Museum/MuseumDetail'
import MuseumService from '../../services/MuseumService';

const museumService = new MuseumService();

export default class Museum extends Component{
  state = {};

  async componentDidMount() {
    const {id} = this.props.match.params
    const {
      data: { museum }
    } = await museumService.getMuseum(id)
    this.setState({ museum })
  }

  render() {
    const { museum } = this.state;
    //console.log(museum)
    return(
      <>
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
      </>
    )
  }
}