import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuseumService from '../../services/MuseumService';
import { Hall } from '../../styles/componets';
import EditHallComp from '../../components/User/EditHallComp';


const museumService = new MuseumService();

export default class EditHall extends Component {
  state = {};

  async componentDidMount() {
    const { id } = this.props.match.params;
    const {
      data: { hall }
    } = await museumService.getHall(id);

    this.setState({hall})
  }

  handleDelete = async (e) => {
    e.preventDefault()
    const { id } = this.props.match.params;
    
    await museumService.deleteHall(id);
    console.log('Hall deleted');
  }

  render() {
    const { museumID } = this.props.match.params;
    const { hall } = this.state;
    return(
      <>
      {
        (hall) ?
        <>
          <Link>
            <small>add </small>
          </Link>
          <form
            onSubmit = { e => {
            this.handleDelete(e)
            this.props.history.push(`/profile/${museumID}`)
          }}
        >
          <button type="submit">delete</button>
        </form>
          <Link>
            <small> delete</small>
          </Link>
          <Hall>
            <h2>{hall.name}</h2>
            <div>
            { hall.artworks.map (artwork => (
              <Link to={`/artwork/${artwork._id}/edit`}>
                <img src={artwork.photoURL} alt="artwork"/>
              </Link>
            ))}
          </div>
          </Hall>
          <EditHallComp
            hallID = {hall._id}
          />
        </>: null
      }
      
      </>
    )
  }
}
