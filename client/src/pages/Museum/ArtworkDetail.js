import React, { Component } from 'react';
import ArtworkDetailComp from '../../components/Museum/ArtworkComp';
import MuseumService from '../../services/MuseumService';
import { MarginCont, MuseumNav } from '../../styles/componets';

const museumService = new MuseumService();

export default class Artwork extends Component{
  state = {};

  async componentDidMount() {
    const {id} = this.props.match.params
    
    const {
      data: { artwork }
    } = await museumService.getArtwork(id)
    this.setState({ artwork })

    const { hallID } = this.state.artwork;

   const {
      data: { hall }
    } = await museumService.getHall(hallID);
    this.setState({
      ...this.state,
      hall
    })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { artwork } = this.state;
    const { hall } = this.state;
    return(
      <MarginCont>
        <MuseumNav>
            <p className="iconBackMuseum" onClick={this.goBack}> detail </p>
          {
            (hall) ? 
            <h3>{hall.name}</h3> : null
          }
        </MuseumNav>
        { (artwork) ?
        <ArtworkDetailComp
          photoURL = { artwork.photoURL }
          title = { artwork.title }
          author = { artwork.author }
          description =  { artwork.description }
        /> : null } 
      </MarginCont>
    )
  }
}