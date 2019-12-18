import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuseumService from '../../services/MuseumService';
import { Hall, EditView, EditAside } from '../../styles/componets';
import { MyContext } from '../../context';

const museumService = new MuseumService();

export default class EditHall extends Component {
  state = {
    name: ''
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

    console.log(this.state);
  }


  handleDelete = async (e) => {
    e.preventDefault()
    const { id } = this.props.match.params;
    const { _id } = this.context.user

    await museumService.deleteHall(id);
    this.props.history.push(`/profile/${_id}`)
    console.log('Hall deleted');
  }

  render() {
    const { hall } = this.state;
    const { name } = this.state;
    return(
      <>
        { (hall) ?
          <>
      <EditAside>
        <Link className="iconBack">
          back
        </Link>
        <h3>Edit hall</h3>
          <form
            onSubmit = { e => {
            this.handleDelete(e)
          }}
          >
            <button type="submit" className="iconDeleteHall">delete</button>
          </form>
      </EditAside>
      <EditView>
          <section>
            <Hall>
            <article>
              <h2>{hall.name}</h2>
              <Link className="iconAddArt" to={`/hall/${hall._id}`}>
              add
              </Link>
            </article>
              <div>
              {
                (hall.artworks) ?
                hall.artworks.map (artwork => (
                <Link to={`/artwork/${artwork._id}/edit`}>
                  <img src={artwork.photoURL} alt="artwork"/>
                </Link>
              )) : null
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
                  placeholder = "Name"
                  type = "Text"
                  onChange = {this.inputChange}
                  value = {name}
                />
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