import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';
import ArtworkDetailComp from '../../components/Museum/ArtworkComp';
import EditArtworkComp from '../../components/User/EditArtworkComp';

const museumService = new MuseumService();

export default class EditArtwork extends Component {
  state = {
    file: {},
    form: {
      title: '',
      description: '',
      author: '',
      photoURL: ''
    }
  };

  async componentDidMount() {
    const { id } = this.props.match.params
    const {
      data: { artwork }
    } = await museumService.getArtwork(id)
    this.setState({
      ...this.state,
      artwork 
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
    console.log(this.state)
  };

  handleEditArtwork = async (e) => {
    e.preventDefault()
    const { _id } = this.state.artwork;

    const { form } = this.state;
    const formData = new FormData()

    for(let key in this.state.form) {
      formData.append(key, this.state.form[key])
    }

    formData.append('photoURL', this.state.file)

    const {
      data: { artwork }
    } = await museumService.updateArtwork(formData, _id);

    this.setState({
      ...this.state,
      form: {
        title: '',
        description: '',
        author: '',
        photoURL: ''
      },
        artwork
    })
    console.log(this.state)

  }

  handleFile = e => {
    this.setState( { file: e.target.files[0] })
  }

  handleDelete = async (e) => {
    e.preventDefault()
    const { id } = this.props.match.params;

    await museumService.deleteArtwork(id);
    console.log('Artwork deleted');
  }
 
  render(){
    const { artwork } = this.state;
    return(
      <>
        { (artwork) ?
          <div>
          <form
            onSubmit = { e => {
            this.handleDelete(e)
            //this.history.push(`/profile/${museumID}`)
          }}
          >
            <button type="submit">delete</button>
          </form>
            <ArtworkDetailComp
              photoURL = { artwork.photoURL }
              title = { artwork.title }
              author = { artwork.author }
              description =  { artwork.description }
            /> 
          </div> : null
        }
        <section>
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
              name="photoURL"
              type="file"
              onChange= {this.handleFile}
              required
            />
            <br/>
            <button type="submit">Update</button>
          </form>
        </section>
      </>
    )
  }
}