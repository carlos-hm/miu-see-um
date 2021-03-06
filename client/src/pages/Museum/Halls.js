import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuseumService from '../../services/MuseumService'
import HallComp from '../../components/Museum/HallComp';
import { MuseumNav, MarginCont } from '../../styles/componets';


const museumService = new MuseumService();

export default class Halls extends Component{
  state={};

  async componentDidMount() {
    const { id } = this.props.match.params
    const {
      data: { halls }
    } = await museumService.getHalls(id)

    const {
      data: { museum }
    } = await museumService.getMuseum(id);
    this.setState({ halls, museum })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { halls, museum } = this.state;
    const { id } = this.props.match.params
    return(
      <MarginCont>
        <MuseumNav>
          <p className="iconBackMuseum" onClick={this.goBack}> detail </p>
        {
          (museum) ? 
          <img src={museum.logoURL} alt="MuuM logo"/> : null
        }
          <Link  className="iconDetail" to={`/detail/${id}`}> detail </Link>
          <Link className="iconMap" to={`/map/${id}` }> map </Link>
        </MuseumNav>
      { (halls) ?
        halls.map ((hall, i) => (
          <HallComp key={i}
            name = {hall.name}
            artworks = {hall.artworks}
          />
      )): null }
      </MarginCont>
    )
  }
}