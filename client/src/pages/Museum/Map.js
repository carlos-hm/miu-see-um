import React, { Component } from 'react';
import { MapStyled } from '../../styles/componets';
import MuseumService from '../../services/MuseumService';

const museumService = new MuseumService();

export default class Map extends Component {
  state = {}

  async componentDidMount() {
    const {id} = this.props.match.params
    const {
      data: { museum }
    } = await museumService.getMuseum(id)
    this.setState({ museum })
  }

  render() {
    const { museum } = this.state;

    return(
      <>
      { (museum) ?
        <MapStyled>
          <img src={ museum.mapURL } alt="Museum map"/>
        </MapStyled> : null
      } 
      </>
    )
  }
}