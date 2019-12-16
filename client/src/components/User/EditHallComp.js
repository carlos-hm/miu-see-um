import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';

const museumService = new MuseumService();

export default class EditHallComp extends Component {
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

  handleEditHall = async (e) => {
    e.preventDefault()
    const { hallID } = this.props;

    const { name } = this.state;

    const data = await museumService.updateHall({ name }, hallID);

    console.log('Hall updated', data);
  }

  render() {
    return(
      <>
      <h2> Edit hall </h2>
      <form 
        onSubmit = { e => {
          this.handleEditHall(e)
        }}
      >
        <input 
          name = "name"
          placeholder = "Name"
          type = "Text"
          onChange = {this.inputChange}
        />
        <br/>
        <button type="submit">Update</button>
      </form>
      </>
    )
  }
}