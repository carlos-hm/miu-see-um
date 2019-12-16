import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';
import ArtworkDetailComp from '../../components/Museum/ArtworkComp';
import EditArtworkComp from '../../components/User/EditArtworkComp';

const museumService = new MuseumService();

export default class EditArtwork extends Component {
  state = {};

  async componentDidMount() {
    const { id } = this.props.match.params
    const {
      data: { artwork }
    } = await museumService.getArtwork(id)
    this.setState({ artwork })
  }

  render(){
    const { artwork } = this.state;
    return(
      <>
        { (artwork) ?
          <div>
            <ArtworkDetailComp
              photoURL = { artwork.photoURL }
              title = { artwork.title }
              author = { artwork.author }
              description =  { artwork.description }
            /> 
            <EditArtworkComp
              artworkID = { artwork._id }
            /> 
          </div> : null
        }
      </>
    )
  }
}