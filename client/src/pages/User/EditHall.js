import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuseumService from '../../services/MuseumService';
import { Hall, EditView, EditAside, AskDelete } from '../../styles/componets';
import { MyContext } from '../../context';

const museumService = new MuseumService();

export default class EditHall extends Component {
  state = {
    name: '',
    showDelete: false,
  };

  async componentDidMount() {
    if(!this.context.loggedUser) return this.props.history.push('/login');

    const { id } = this.props.match.params;
    const {
      data: { hall }
    } = await museumService.getHall(id);

    this.setState({
      ...this.state,
      hall, 
      name: hall.name
    })
  }

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleEditHall = async (e) => {
    e.preventDefault()
    const { _id } = this.state.hall;
    const { name } = this.state;
    const { data: hall} = await museumService.updateHall({ name }, _id);

    this.setState( prevState => ({
      ...prevState,
      hall 
    }))
  }


  handleDelete = async (e) => {
    e.preventDefault()
    const { id } = this.props.match.params;
    const { _id } = this.context.user

    await museumService.deleteHall(id);
    this.props.history.push(`/profile/${_id}`)
  }

  toggle = () =>  {
    let value = !this.state.showDelete;
   
    this.setState(prevState => ({
      ...prevState,
      showDelete: value,
    }))
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { hall, name, showDelete } = this.state;

    return(
      <>
        { (hall) ?
          <>
      <EditAside>
        <p onClick={this.goBack} className="iconBack">
          back
        </p>
        <h3>Edit hall</h3>
        <p onClick={this.toggle} className="iconDeleteHall">delete</p>
      </EditAside>
      { (showDelete) ?
      <AskDelete>
        <p>Are you sure you want to delete this hall?<br/>This action will delete all the artworks in it too...</p>
        <button onClick={this.toggle}>Cancel</button>
        <button onClick={this.handleDelete}>Delete</button>
      </AskDelete> : null
      }
      <EditView>
          <section>
            <Hall className="editHallMus">
            <article>
              <h2>{hall.name}</h2>
              <Link className="iconAddArt" to={`/hall/${hall._id}`}>
              add
              </Link>
            </article>
              <div>
              {
                (hall.artworks.length !== 0) ?
                hall.artworks.map ((artwork, i) => (
                <Link key={i} to={`/artwork/${artwork._id}/edit`}>
                  <img src={artwork.photoURL} alt="artwork"/>
                </Link>
              )) : <div>no artworks yet</div>
              }
              </div>
            </Hall>
          </section>
            <section>
              <form 
                onSubmit = { e => {
                  this.handleEditHall(e)
                }}
              >
                <input 
                  name = "name"
                  placeholder = "Hall..."
                  type = "Text"
                  onChange = {this.inputChange}
                  value = {name}
                  required
                />
                <br/>
                <label>name</label>
                <br/>
                <button type="submit">Update</button>
              </form>
            </section>
      </EditView>
          </>: null
        }
      </>
    )
  }
}

EditHall.contextType = MyContext;