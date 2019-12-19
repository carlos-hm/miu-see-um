import React, { Component } from 'react';
import MuseumDetailComp from '../../components/Museum/MuseumDetail';
import MuseumService from '../../services/MuseumService';
import { EditView, EditAside } from '../../styles/componets';
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
      mapURL: '',
      hours: {
      }
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
        mapURL: museum.mapURL,
        monday: museum.hours.monday,
        tuesday: museum.hours.tuesday,
        wednesday: museum.hours.wednesday,
        thursday: museum.hours.thursday,
        friday: museum.hours.friday,
        saturday: museum.hours.saturday,
        sunday: museum.hours.sunday
      }
    })
  }

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
    const { _id } = this.state.museum;
    const formData = new FormData()

    for(let key in this.state.form) {
      formData.append(key, this.state.form[key])
    }

    formData.append('photoURL', this.state.file)

    const { data: { museum }} = await museumService.updateMuseum(formData, _id);
    this.setState(prevState => ({
      ...prevState, 
      museum,
    }))
  }

  handleFile = e => {
    this.setState( { file: e.target.files[0] })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { museum } = this.state;
    const { form } = this.state;

    return(
      <MyContext.Consumer>
      {context => (
      <>
      <EditAside>
        <b onClick={this.goBack} className="iconBack">
          back
        </b>
        <h3>Edit museum</h3>
      </EditAside>
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
           { (form) ?
          <form
            onSubmit={ e => {
              this.handleEditMuseum(e)
            }} >
            <input 
                name="name"
                placeholder="Name"
                type="text"
                onChange= {this.inputChange}
                value={form.name}
                required
              />
            <label>museum name</label>
            <br/>
            <input 
                name="short"
                placeholder="short"
                type="text"
                onChange= {this.inputChange}
                value={form.short}
                required
            />
            <label>musuem short</label>
            <br/>
            <textarea rows="4" cols="50" 
                name="description"
                placeholder="description"
                type="text"
                onChange= {this.inputChange}
                value={form.description}
                required
            />
            <label>description</label>
            <br/>
            <input 
                name="address"
                placeholder="address"
                type="text"
                onChange= {this.inputChange}
                value={form.address}
                required
            />
            <label>address</label>
            <br/>
            <input 
                name="ticket"
                placeholder="ticket"
                type="text"
                onChange= {this.inputChange}
                value={form.ticket}
                required
            />
            <br/>
            <label>ticket price</label>
            <br/>
            <input 
                name="photoURL"
                type="file"
                onChange= {this.handleFile}
                required
            />
            <br/>
            <label>photo</label>
            <br/>
            <input style={{display: "none"}} 
                name="mapURL"
                type="text"
                defaultValue={form.mapURL}
            />
            <input style={{display: "none"}}
                name="monday"
                type="text"
                defaultValue={form.monday}
            />
            <input style={{display: "none"}} 
                name="tuesday"
                type="text"
                defaultValue={form.tuesday}
            />
            <input style={{display: "none"}} 
                name="wednesday"
                type="text"
                defaultValue={form.wednesday}
            />
            <input style={{display: "none"}} 
                name="thursday"
                type="text"
                defaultValue={form.thursday}
            />
            <input style={{display: "none"}} 
                name="friday"
                type="text"
                defaultValue={form.friday}
            />
            <input style={{display: "none"}} 
                name="saturday"
                type="text"
                defaultValue={form.saturday}
            />
            <input style={{display: "none"}} 
                name="sunday"
                type="text"
                defaultValue={form.sunday}
            />
            <br/>
            <button type="submit">Submit</button>
          </form>: null
           }
        </section>
      </EditView>
      </>
      )}
      </MyContext.Consumer>
    )
  }
}

EditMuseum.contextType = MyContext;