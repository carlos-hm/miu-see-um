import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuseumService from '../../services/MuseumService';
import ArtworkDetailComp from '../../components/Museum/ArtworkComp';
import { MyContext } from '../../context';
import { EditView, EditAside } from '../../styles/componets';


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
    if(!this.context.loggedUser) return this.props.history.push('/login')

    const { id } = this.props.match.params
    const {
      data: { artwork }
    } = await museumService.getArtwork(id)
    this.setState({
      ...this.state,
      artwork,
      form: {
        title: artwork.title,
        description: artwork.description,
        author: artwork.author,
        photoURL: artwork.photoURL
      }
    })

    console.log(this.context.user)
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
    const formData = new FormData()

    for(let key in this.state.form) {
      formData.append(key, this.state.form[key])
    }

    formData.append('photoURL', this.state.file)

    const { data: { artwork } }  = await museumService.updateArtwork(formData, _id);
    this.setState(prevState => ({
      ...prevState,
        artwork
    }))
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

  goBack = () => {
    this.props.history.goBack()
  }
 
  render(){
    const { artwork } = this.state;
    const { form } = this.state;
    return(
      <MyContext.Consumer>
      {context => (
      <>
        { (artwork) ?
        <>
      <EditAside>
        <Link onClick={this.goBack} className="iconBack">
          back
        </Link>
        <h3>Edit artwork</h3>
        <form
            onSubmit = { e => {
            this.handleDelete(e)
            this.props.history.push(`/profile/${this.context.user._id}`)
          }}
          >
            <button type="submit" className="iconDeleteHall">delete</button>
          </form>
      </EditAside>
      <EditView>
          <section>
            <ArtworkDetailComp
              photoURL = { artwork.photoURL }
              title = { artwork.title }
              author = { artwork.author }
              description =  { artwork.description }
            /> 
          </section> 
        <section>
          <form
            onSubmit= { e => {
              this.handleEditArtwork(e)
            }} 
          >
            <label>title</label>
            <br/>
            <input
              name = "title"
              placeholder= "Title"
              type="text"
              onChange= {this.inputChange}
              value = {form.title}
              required
            />
            <br/>
            <label>description</label>
            <br/>
            <textarea rows="4" cols="50"
              name = "description"
              placeholder= "Description"
              type="text"
              onChange= {this.inputChange}
              value = {form.description}
              required
            />
            <br/>
            <label>author</label>
            <br/>
            <input
              name = "author"
              placeholder= "Author"
              type ="text"
              onChange = {this.inputChange}
              value = {form.author}
              required
            />
            <br/>
            <label>photo</label>
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
      </EditView>
      </>: null
        }
      </> )}
      </MyContext.Consumer>
    )
  }
}

EditArtwork.contextType = MyContext;