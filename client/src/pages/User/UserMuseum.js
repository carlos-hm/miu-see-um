import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuseumDetailComp from '../../components/Museum/MuseumDetail';
import MuseumService from '../../services/MuseumService';
import {UserDashboard, StyledNav} from '../../styles/componets';
import UserHallComp from '../../components/User/UserHallComp';
import AddHallComp from '../../components/User/AddHallComp';

import { MyContext } from '../../context'


const museumService = new MuseumService();

export default class UserMuseum extends Component{
  state = {
    name: ''
  };

  async componentDidMount() {
    if(!this.context.loggedUser) return this.props.history.push('/login')


    const {id} = this.props.match.params
    //console.log(this.context.user)


    const {
      data: { museum }
    } = await museumService.getUserMuseum(id)
    this.setState({ 
      ...this.state,
      museum 
    })
     if(this.state.museum) {
       const {
         data: { halls }
       } = await museumService.getHalls(this.state.museum._id)
       this.setState({ 
         ...this.state,
         halls, 
       })

     }

  }

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleAddHall = async (e) => {
    e.preventDefault()
    const { _id } = this.state.museum
    const { name } = this.state;

    const data = await museumService.addHall({
      name
    }, _id);
    
    this.setState({
      ...this.state,
      halls: data
    });
    console.log('Hall added', data);
  }
  
 
  render() {
    const { museum } = this.state;
    const { halls } = this.state;
    const { id } = this.props.match.params

    return(
      <MyContext.Consumer>
      {context => (
      <>
      <StyledNav>
        <figure>
          <img src="https://res.cloudinary.com/carlos-hm/image/upload/v1576561407/Muum/MuuM_logo_r0fbjo.png" alt="MuuM logo"/>
          { (museum) ?  
          <img src={museum.logoURL} alt="Museum logo"/> : null
          }
        </figure>
        <form
          onSubmit={ e => {
            context.handleLogout(e)
            //props.history.push('/login')
          }} >
          <button className="icon"  style={{backgroundImage:"url(/ic-exit-to-app.svg)", border:"none"}} type="submit">Logout</button>
        </form>
      </StyledNav>
      <UserDashboard>
      <section>
        <aside>
          <h3>museum</h3>
          <Link className="icon" to={`/profile/${id}/edit`}>edit</Link>
        </aside>
        <article>
        { (museum) ?
          <MuseumDetailComp 
            name = { museum.name }
            photoURL = { museum.photoURL }
            description = { museum.description }
            address = { museum.address }
            ticket = { museum.ticket }
            hours = { museum.hours }
          /> : null
        }
        </article>
      </section>
      <section>
      <aside className="halls">
        <h3>halls</h3>
        <Link className="icon" style={{backgroundImage:"url(/ic-add-circle.svg)"}} to={`/`}> add </Link>
      </aside>
        <div>
          <h2>new hall</h2>
          <form 
            onSubmit={e => {
              this.handleAddHall(e)
            }}
          >
          <input
            name = "name"
            placeholder = "Name"
            type = "text"
            onChange = {this.inputChange}
          />
          <br/>
          <button type="submit"> add</button>
          </form>
        </div>
        { (halls) ?
          halls.map (hall => (
            <UserHallComp
              name = {hall.name}
              artworks = {hall.artworks}
              hallID = {hall._id}
            />
        )): null }
      </section>
      </UserDashboard>
      </>
      )}
      </MyContext.Consumer>
    )
  }
}

UserMuseum.contextType = MyContext;