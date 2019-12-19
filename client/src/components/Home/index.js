import React, { Component } from 'react';
import MuseumCardComp from '../Museum/MuseumCard';
import MuseumService from '../../services/MuseumService';
import { MuseumNav, MarginCont } from '../../styles/componets';

const museumService = new MuseumService();

export default class Home extends Component{
  state = {
    museums: []
  };

  async componentDidMount() {
    const {
      data: { museums }
    } = await museumService.getMuseums();
    this.setState({
      museums
    });
  }

  render() {
    const { museums } = this.state;
    return (
      <MarginCont>
        <MuseumNav>
          <img src="https://res.cloudinary.com/carlos-hm/image/upload/v1576705470/Muum/MuuM_logoH_fo8fy5.png" alt="MuuM logo"/>
        </MuseumNav>
          {museums.map ((museum, i)=> (
            <MuseumCardComp key={i}
              route = { museum._id }
              name = { museum.name }
              address = { museum.address }
              photoURL = { museum.photoURL }
            />
          ))}
      </MarginCont>
    )
  }
}