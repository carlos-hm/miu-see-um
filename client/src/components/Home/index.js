import React, { Component } from 'react';
import MuseumCardComp from '../Museum/MuseumCard';
import MuseumService from '../../services/MuseumService';

const museumService = new MuseumService();

export default class Home extends Component{
  state = {
    museums: []
    // name: "MUAC",
    // address: "Insurgentes 3000,  Coyoacán, 04510, C.U. CDMX, México",
    // photoURL: "https://www.saint-gobain.com.mx/sites/sgmx.master/files/muac_c_0.jpg",
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
      <>
        {museums.map (museum => (
          <MuseumCardComp
            route = { museum._id }
            name = { museum.name }
            address = { museum.address }
            photoURL = { museum.photoURL }
          />
        ))}
      </>
    )
  }
}