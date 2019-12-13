import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuseumService from '../../services/MuseumService'
import HallComp from '../../components/Museum/HallComp';

const museumService = new MuseumService();

export default class Halls extends Component{
  state={};

  async componentDidMount() {
    const { id } = this.props.match.params
    const {
      data: { halls }
    } = await museumService.getHalls(id)
    this.setState({ halls })
  }

  render() {
    const { halls } = this.state;
    const { id } = this.props.match.params
    return(
      <>
      <Link to={`/detail/${id}`}>
      detail
      </Link>
      <Link to={`/map/${id}` }>
        map
      </Link>
      { (halls) ?
        halls.map (hall => (
          <HallComp
            name = {hall.name}
            artworks = {hall.artworks}
          />
      )): null }
      </>
    )
  }
}