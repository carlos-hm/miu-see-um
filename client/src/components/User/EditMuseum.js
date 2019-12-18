import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';

//import { MyContext } from '../../context';


const museumService = new MuseumService();

export default class EditMuseumComp extends Component{
  state = {
    file:{},

    // editMuseumForm:{
    form: {
      name: '',
      short: '',
      description: '',
      address: '',
      ticket: '',
      photoURL: '',
      mapURL: '' 
    }
    // }
  };

  componentDidMount() {
    //console.log(this.context.editMuseumForm)
  }

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      form:{
        ...this.state.form,
        [name]: value
      }
    });
    console.log(this.state)
  };


  handleEditMuseum = async (e) => {
    e.preventDefault()
    const { museumID } = this.props;

    // const { 
    //   name, 
    //   short, 
    //   description, 
    //   address, 
    //   ticket, 
    //   photoURL, 
    //   mapURL 
    // } = this.state;

    const { form } = this.state;
    const formData = new FormData()

    for(let key in this.state.form) {
      formData.append(key, this.state.form[key])
    }

    formData.append('photoURL', this.state.file)

    const museum = await museumService.updateMuseum(formData, museumID);
    console.log(museum);

    this.setState()

    // const data = await museumService.updateMuseum({
    //   name, 
    //   short, 
    //   description, 
    //   address, 
    //   ticket, 
    //   photoURL, 
    //   mapURL
    // }, museumID);
    // console.log('Museum updated', data);
  }

  handleFile = e => {
    this.setState( { file: e.target.files[0] })
  }

  render() {
    //const { editMuseumForm } = this.state;
    return(
      // <MyContext.Consumer>
      // { context => (
        <>
        <h2>Edit museumo</h2>
        <form 
        // onSubmit = { this.handleEditMuseum } >
         onSubmit={ e => {
          this.handleEditMuseum(e)
          //props.history.push('/login')
        }} >
        {/* onSubmit = { e => this.handleEditMuseum(e, this.props.museumID) }> */}
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
      // )}

      // </MyContext.Consumer>
    )
  }
}

//EditMuseumComp.contextType = MyContext;