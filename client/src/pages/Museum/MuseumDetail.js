import React, { Component } from 'react';
import MuseumDetailComp from '../../components/Museum/MuseumDetail'
import MuseumService from '../../services/MuseumService';
import { MarginCont, MuseumNav } from '../../styles/componets';

const museumService = new MuseumService();

export default class Museum extends Component{
  state = {};

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
    //console.log(museum)
    return(
      <MarginCont>
        <MuseumNav>
          <p className="iconBackMuseum" onClick={this.goBack}> detail </p>
        {
          (museum) ? 
          <img src={museum.logoURL} alt="MuuM logo"/> : null
        }
        </MuseumNav>
      { (museum) ?
         <MuseumDetailComp
          name = { museum.name }
          photoURL = { museum.photoURL }
          description = { museum.description }
          address = { museum.address }
          ticket = { museum.ticket }
          hours = { museum.hours }
        /> : null
      }
      </MarginCont>
    )
  }
}