import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';

//import { MyContext } from '../../context';


const museumService = new MuseumService();

export default class EditMuseumComp extends Component{
  state = {
    // editMuseumForm:{
      name: '',
      short: '',
      description: '',
      address: '',
      ticket: '',
      photoURL: '',
      mapURL: ''
    // }
  };

  componentDidMount() {
    //console.log(this.context.editMuseumForm)
  }

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
    console.log(this.state)
  };


  handleEditMuseum = async (e) => {
    e.preventDefault()
    const {museumID} = this.props;

    const { 
      name, 
      short, 
      description, 
      address, 
      ticket, 
      photoURL, 
      mapURL 
    } = this.state;

    const data = await museumService.updateMuseum({
      name, 
      short, 
      description, 
      address, 
      ticket, 
      photoURL, 
      mapURL
    }, museumID);
    console.log('Museum updated', data);
  }


  render() {
    //const { editMuseumForm } = this.state;
    return(
      // <MyContext.Consumer>
      // { context => (
        <>
        <h2>Edit museum</h2>
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
          <input 
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
              placeholder="photoURL"
              type="text"
              onChange= {this.inputChange}
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