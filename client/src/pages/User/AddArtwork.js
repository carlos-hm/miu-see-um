import React, { Component } from 'react';
import MuseumService from '../../services/MuseumService';
import { MyContext } from '../../context';
import { EditView, EditAside } from '../../styles/componets';
import ArtworkDetailComp from '../../components/Museum/ArtworkComp'


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

  handleAddArtwork = async (e) => {
    e.preventDefault()
    const { id } = this.props.match.params
    const formData = new FormData()

    for(let key in this.state.form) {
      formData.append(key, this.state.form[key])
    }

    formData.append('photoURL', this.state.file)

    await museumService.addArtwork(formData, id);
   
    this.props.history.push(`/profile/${this.context.user._id}`)
  }

  handleFile = e => {
    this.setState( { file: e.target.files[0] })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const {hall} = this.state;
    return(
      <MyContext.Consumer>
      {context => (
      <>
      <EditAside>
        <b onClick={this.goBack} className="iconBack">
          back
        </b>
        {
        (hall) ? 
        <h3>new artwork on {hall.name}</h3>: null
      }
      </EditAside>
      <EditView>
        <section>
          <ArtworkDetailComp
            photoURL = "https://res.cloudinary.com/carlos-hm/image/upload/v1576540607/Muum/muac_c_0.jpg.jpg"
            title = "Artwork title"
            author = "Author name"
            description =  "Artwork description"
          /> 
        </section>
        <section>
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
            <textarea rows="4" cols="50"
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
        </section>
        </EditView>
      </>
      )}
      </MyContext.Consumer>
    )
  }
}

AddArtwork.contextType = MyContext;