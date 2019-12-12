import React, { Component } from 'react';
import MuseumComp from '../Museum/Museum';

export default class Home extends Component{
  state = {
    name: "MUAC",
    address: "Insurgentes 3000,  Coyoacán, 04510, C.U. CDMX, México",
    photoURL: "https://www.saint-gobain.com.mx/sites/sgmx.master/files/muac_c_0.jpg",
  }

  render() {
    const {name, address, photoURL} = this.state;
    return (
      <>
        <MuseumComp 
          name = { name }
          address = { address }
          photoURL = { photoURL }
        />
      </>
    )
  }
}