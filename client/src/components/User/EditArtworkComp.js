import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';

const museumService = new MuseumService();

export default class EditArtworkComp extends Component {
  state = {
    title: '',
    description: '',
    author: '',
    photoURL: ''
  }

  componentDidMount() {

  }

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleEditArtwork = async (e) => {
    e.preventDefault()
    const { artworkID } = this.props;

    const {
      title,
      description,
      author,
      photoURL
    } = this.state;

    const data = await museumService.updateArtwork({
      title,
      description,
      author,
      photoURL
    }, artworkID);

    console.log('Artwork updated', data);
  }

  render() {
    
    return(
      <>
        <h2>Edit artwork</h2>
        <form
          onSubmit= { e => {
            this.handleEditArtwork(e)
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
          <button type="submit">Update</button>
        </form>
      </>
    )
  }
}