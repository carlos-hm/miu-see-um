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

  handleDelete = async (e) => {
    e.preventDefault()
    const { id } = this.props.match.params;

    await museumService.deleteArtwork(id);
    console.log('Artwork deleted');
  }

  render(){
    const { artwork } = this.state;
    return(
      <>
        { (artwork) ?
          <div>
          <form
            onSubmit = { e => {
            this.handleDelete(e)
            //this.history.push(`/profile/${museumID}`)
          }}
          >
            <button type="submit">delete</button>
          </form>
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