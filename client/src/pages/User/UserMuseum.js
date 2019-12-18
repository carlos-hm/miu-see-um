import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuseumDetailComp from '../../components/Museum/MuseumDetail';
import MuseumService from '../../services/MuseumService';
import { UserDashboard } from '../../styles/componets';
import UserHallComp from '../../components/User/UserHallComp';

import { MyContext } from '../../context'
import UserNav from '../../components/User/UserNav';


const museumService = new MuseumService();

export default class UserMuseum extends Component{
  state = {
    name: '',
    showForm: false
  };

  async componentDidMount() {
    if(!this.context.loggedUser) return this.props.history.push('/login')
    const {id} = this.props.match.params
    
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
     //console.log(this.state)

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

    const { data }  = await museumService.addHall({
      name
    }, _id);
    
    this.setState(prevState => ({
      ...prevState,
      halls: [...prevState.halls, data ]

    }));
    //console.log('Hall added', data);
  }

  toggle = () =>  {
    let value = !this.state.showForm;

    this.setState(prevState => ({
      ...prevState,
      showForm: value,
    }))
  }
  
 
  render() {
    const { museum, halls, showForm} = this.state;
    const { id } = this.props.match.params

    return(
      <MyContext.Consumer>
      {context => (
      <>
      <UserNav
        museum = {museum}
      />
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
        <Link className="icon" style={{backgroundImage:"url(/ic-add-circle.svg)"}} onClick={this.toggle}> add </Link>
      </aside>
      <div className="firstHall">

      
      { (showForm) ?
        <div>
          <h3>new hall</h3>
          <form 
            onSubmit={e => {
              this.handleAddHall(e)
              this.toggle(e)
            }}
          >
          <input
            name = "name"
            placeholder = "Hall..."
            type = "text"
            maxlength="10"
            onChange = {this.inputChange}
          />
          <label>name</label>
          <br/>
          <button type="submit"> add</button>
          </form>
        </div> : null
      }
        { (halls) ?
          halls.map (hall => (
            <UserHallComp
              name = {hall.name}
              artworks = {hall.artworks}
              hallID = {hall._id}
            />
        )): null }
        </div>
      </section>
      </UserDashboard>
      </>
      )}
      </MyContext.Consumer>
    )
  }
}

UserMuseum.contextType = MyContext;