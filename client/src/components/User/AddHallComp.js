import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';

const museumService = new MuseumService();

export default class AddHallComp extends Component {
  state = {
    name: ''
  } 

  componentDidMount() {

  }

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleAddHall = async (e) => {
    e.preventDefault()
    const { museumID } = this.props
    const { name } = this.state;

    const data = await museumService.addHall({
      name
    }, museumID);

    console.log('Hall added', data);
  }

  render() {
    return(
      <>
        <h2>new hall</h2>
        <form 
          onSubmit={e => {
            this.handleAddHall(e)
          }}
        >
        <input
          name = "name"
          placeholder = "Name"
          type = "text"
          onChange = {this.inputChange}
        />
        <br/>
        <button type="submit"> add</button>
        </form>
      </>
    )
  }
}