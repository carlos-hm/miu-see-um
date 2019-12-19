import React, { Component } from 'react';
import { MapStyled, MarginCont, MuseumNav } from '../../styles/componets';
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

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { museum } = this.state;

    return(
      <MarginCont>
        <MuseumNav>
          <p className="iconBackMuseum" onClick={this.goBack}> detail </p>
        </MuseumNav>
      { (museum) ?
        <MapStyled>
          <img src={ museum.mapURL } alt="Museum map"/>
        </MapStyled> : null
      } 
      </MarginCont>
    )
  }
}