import React, { Component } from 'react';
import MuseumDetailComp from '../../components/Museum/MuseumDetail';
import MuseumService from '../../services/MuseumService';
import { EditView } from '../../styles/componets';
import { MyContext } from '../../context';

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
    if(!this.context.loggedUser) return this.props.history.push('/login')

    const {id} = this.props.match.params
    const {
      data: { museum }
    } = await museumService.getUserMuseum(id)
    this.setState({ 
      ...this.state,
      museum, 
      form: {
        name: museum.name,
        short: museum.short,
        description: museum.description,
        address: museum.address,
        ticket: museum.ticket,
        photoURL: museum.photoURL,
        mapURL: museum.mapURL
      }
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
    //const { form } = this.state;
    const formData = new FormData()

    for(let key in this.state.form) {
      formData.append(key, this.state.form[key])
    }

    formData.append('photoURL', this.state.file)

    const { data: { museum }} = await museumService.updateMuseum(formData, _id);
    this.setState(prevState => ({
      ...prevState, 
      museum,
        form: {
          name: '',
          short: '',
          description: '',
          address: '',
          ticket: '',
          photoURL: '',
          mapURL: '' 
        }, 
    }))
  }

  handleFile = e => {
    this.setState( { file: e.target.files[0] })
  }

  render() {
    const { museum } = this.state;
    const { form } = this.state;
    console.log(museum)
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
           { (form) ? 
            <input 
                name="name"
                placeholder="Name"
                type="text"
                onChange= {this.inputChange}
                value={form.name}
              />: null
           }
            <br/>
            <input 
                name="short"
                placeholder="short"
                type="text"
                onChange= {this.inputChange}
                value={form.short}
            />
            <br/>
            <input 
                name="description"
                placeholder="description"
                type="text"
                onChange= {this.inputChange}
                value={form.description}
            />
            <br/>
            <input 
                name="address"
                placeholder="address"
                type="text"
                onChange= {this.inputChange}
                value={form.address}
            />
            <br/>
            <input 
                name="ticket"
                placeholder="ticket"
                type="text"
                onChange= {this.inputChange}
                value={form.ticket}
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
                value={form.mapURL}
            />
            <br/>
            <button type="submit">Submit</button>
          </form>
        </section>
      </EditView>
    )
  }
}

EditMuseum.contextType = MyContext;