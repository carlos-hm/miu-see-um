import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';

const museumService = new MuseumService();

export default class AddArtworComp extends Component {
  state = {
    title: '',
    description: '',
    author: '',
    photoURL: ''
  }

  componentDidMount () {

  }

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleAddArtwork = async (e) => {
    e.preventDefault()
    const { hallID } = this.props
    const {
      title,
      description,
      author,
      photoURL
    } = this.state;

    const data = await museumService.addArtwork({
      title,
      description,
      author,
      photoURL
    }, hallID);

    console.log('Artwork added', data);
  }

  render() {

    return(
      <>
        <h2>new artwork on</h2>
        <form
          onSubmit= { e => {
            this.handleAddArtwork(e)
          }}
        >
          <input
            name = "title"
            placeholder= "Title"
            type="text"
            onChange= {this.inputChange}
          />
          <br/>
          <input
            name = "description"
            placeholder= "Description"
            type="text"
            onChange= {this.inputChange}
          />
          <br/>
          <input
            name = "author"
            placeholder= "Author"
            type="text"
            onChange= {this.inputChange}
          />
          <br/>
          <input
            name = "photoURL"
            placeholder= "photoURL"
            type="text"
            onChange= {this.inputChange}
          />
          <br/>
          <button type="submit">add</button> 
        </form>
      </>
    )
  }
}