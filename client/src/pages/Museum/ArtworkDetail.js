import React, { Component } from 'react';
import ArtworkDetailComp from '../../components/Museum/ArtworkComp';
import MuseumService from '../../services/MuseumService';

const museumService = new MuseumService();

export default class Artwork extends Component{
  state = {};

  async componentDidMount() {
    const {id} = this.props.match.params
    const {
      data: { artwork }
    } = await museumService.getArtwork(id)
    this.setState({ artwork })
  }

  render() {
    const { artwork } = this.state;
    return(
      <>
        { (artwork) ?
        <ArtworkDetailComp
          photoURL = { artwork.photoURL }
          title = { artwork.title }
          author = { artwork.author }
          description =  { artwork.description }
        /> : null
        } 
      </>
    )
  }
}