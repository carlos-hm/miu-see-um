import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';

const museumService = new MuseumService();

export default class EditMuseumComp extends Component{
  state = {
    file:{},
    form: {
      name: '',
      short: '',
      description: '',
      address: '',
      ticket: '',
      photoURL: '',
      mapURL: '' 
    }
  };

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      form:{
        ...this.state.form,
        [name]: value
      }
    });
  };


  handleEditMuseum = async (e) => {
    e.preventDefault()
    const { museumID } = this.props;

    const { form } = this.state;
    const formData = new FormData()

    for(let key in this.state.form) {
      formData.append(key, this.state.form[key])
    }

    formData.append('photoURL', this.state.file)

    const museum = await museumService.updateMuseum(formData, museumID);
    this.setState()
  }

  handleFile = e => {
    this.setState( { file: e.target.files[0] })
  }

  render() {
    return(
        <>
        <h2>Edit museumo</h2>
        <form 
         onSubmit={ e => {
          this.handleEditMuseum(e)
        }} >
          <input 
              name="name"
              placeholder="Name"
              type="text"
              onChange= {this.inputChange}
            />
          <br/>
          <input 
              name="short"
              placeholder="short"
              type="text"
              onChange= {this.inputChange}
          />
          <br/>
          <textarea rows="4" cols="50"
              name="description"
              placeholder="description"
              type="text"
              onChange= {this.inputChange}
          />
          <br/>
          <input 
              name="address"
              placeholder="address"
              type="text"
              onChange= {this.inputChange}
          />
          <br/>
          <input 
              name="ticket"
              placeholder="ticket"
              type="text"
              onChange= {this.inputChange}
          />
          <br/>
          <input 
              name="photoURL"
              type="file"
              onChange= {this.handleFile}
              required
          />
          <br/>
          <input 
              name="mapURL"
              placeholder="mapURL"
              type="text"
              onChange= {this.inputChange}
          />
          <br/>
          <button type="submit">Submit</button>
        </form>
        </>
    )
  }
}