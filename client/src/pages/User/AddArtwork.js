import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';
import { MyContext } from '../../context';

const museumService = new MuseumService();


export default class AddArtwork extends Component{
  state = {
    file: {},
    form: {
      title: '',
      description: '',
      author: '',
      photoURL: ''
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const {
      data: { hall }
    } = await museumService.getHall(id);

    this.setState({hall})
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
    console.log(this.state)
  };

  handleAddArtwork = async (e) => {
    e.preventDefault()
    const { id } = this.props.match.params
    const formData = new FormData()

    for(let key in this.state.form) {
      formData.append(key, this.state.form[key])
    }

    formData.append('photoURL', this.state.file)

    const {
      data: { artwork }
    } = await museumService.addArtwork(formData, id);
   
    this.props.history.push(`/profile/${this.context.user._id}`)

    console.log('Artwork added', artwork);
  }

  handleFile = e => {
    this.setState( { file: e.target.files[0] })
  }

  render() {
    const {hall} = this.state;
    return(
      <MyContext.Consumer>
      {context => (
      <>
      {
        (hall) ?
        <h2>new artwork on {hall.name}</h2> : null
      }
        <form
          onSubmit= { e => {
            this.handleAddArtwork(e)
            //this.props.history.goBack();
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
            name="photoURL"
            type="file"
            onChange= {this.handleFile}
            required
          />
          <br/>
          <button type="submit">add</button> 
        </form>
      </>
      )}
      </MyContext.Consumer>
    )
  }
}

AddArtwork.contextType = MyContext;