import React, { Component } from 'react';
import MuseumDetailComp from '../../components/Museum/MuseumDetail';
import MuseumService from '../../services/MuseumService';
import { EditView } from '../../styles/componets';

const museumService = new MuseumService();

export default class EditMuseum extends Component{
  state = {
    file: {},
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

  async componentDidMount() {
    const {id} = this.props.match.params
    const {
      data: { museum }
    } = await museumService.getMuseum(id)
    this.setState({ 
      ...this.state,
      museum 
    })
    console.log(this.state)
  }

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      form:{
        ...this.state.form,
        [name]: value
      }
    });
    //console.log(this.state)
  };


  handleEditMuseum = async (e) => {
    e.preventDefault()
    const { _id } = this.state.museum;

    const { form } = this.state;
    const formData = new FormData()

    for(let key in this.state.form) {
      formData.append(key, this.state.form[key])
    }

    formData.append('photoURL', this.state.file)

    const {
     data: { museum }
    } = await museumService.updateMuseum(formData, _id);
    
    this.setState({
      ...this.state,
      form: {
        name: '',
        short: '',
        description: '',
        address: '',
        ticket: '',
        photoURL: '',
        mapURL: '' 
      }, 
        museum
    })
    console.log(this.state)


    //console.log(this.state);
    //this.setState({ museum })
  }

  handleFile = e => {
    this.setState( { file: e.target.files[0] })
  }

  render() {
    const { museum } = this.state;
    //console.log(museum._id)
    return(
      <EditView>
        <section>
          {
            (museum) ? 
            <MuseumDetailComp 
                name = { museum.name }
                photoURL = { museum.photoURL }
                description = { museum.description }
                address = { museum.address }
                ticket = { museum.ticket }
                hours = { museum.hours }
            /> : null
          }
        </section>
        <section>
          <h2>Edit museum</h2>
          <form
          onSubmit={ e => {
            this.handleEditMuseum(e)
            //props.history.push('/login')
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
        </section>
      </EditView>
    )
  }
}