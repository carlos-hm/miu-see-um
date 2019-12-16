import React, { Component } from 'react';
import AddArtworComp from '../../components/User/AddArtworkComp';
import MuseumService from '../../services/MuseumService';

const museumService = new MuseumService();


export default class AddArtwork extends Component{
  state = {}

  // async componentDidMount() {
  //   const { id } = this.props.match.params;
  //   const hall = await museumService.getHalls(id);

  //   this.setState({hall})
  // }

  render() {
    const { id } = this.props.match.params;
    return(
      <>
        <h2>{id}</h2>
        <AddArtworComp

          hallID = {id}
        />
      </>
    )
  }
}
