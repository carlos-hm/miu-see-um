import React, { Component } from 'react';
import MuseumDetailComp from '../../components/Museum/MuseumDetail';
import MuseumService from '../../services/MuseumService';
import { EditView } from '../../styles/componets';
import EditMuseumComp from '../../components/User/EditMuseum';

const museumService = new MuseumService();

export default class EditMuseum extends Component{
  state = {};

  async componentDidMount() {
    const {id} = this.props.match.params
    const {
      data: { museum }
    } = await museumService.getMuseum(id)
    this.setState({ museum })
  }

  render() {
    const { museum } = this.state;
    //console.log(museum._id)
    return(
      <EditView>
      {
         (museum) ? 
         <>
         <MuseumDetailComp 
            name = { museum.name }
            photoURL = { museum.photoURL }
            description = { museum.description }
            address = { museum.address }
            ticket = { museum.ticket }
            hours = { museum.hours }
         />
        <EditMuseumComp
          museumID = { museum._id }
        />
         </> : null
      }
        <section>
          <form>
            
          </form>
        </section>
      </EditView>
    )
  }
}