import React, { Component } from 'react';
import { MyContext } from '../../context';
import { Link } from 'react-router-dom';
import { StyledNav, AuthForm, AuthImage } from '../../styles/componets'


export default class  SignupContainer extends Component {
  state = {
    showError: false,
  }
  
  componentDidUpdate() {
    if(this.context.loggedUser) {
      return this.props.history.push(`/profile/${this.context.user._id}`)
    }  
  }

  toggle = () =>  {
    let value = !this.state.showError;

    this.setState(prevState => ({
      ...prevState,
      showError: value,
    }))
  }
  

  render() {
    return (
      <MyContext.Consumer>
      { context => (
        <>
          <StyledNav>
              <figure>
              <Link to="/">
                <img style={{border: "none"}}
                src="https://res.cloudinary.com/carlos-hm/image/upload/v1576561407/Muum/MuuM_logo_r0fbjo.png" alt="MuuM logo"/>
              </Link>
              </figure>
                <Link to="/login" className="authLink">
                  Login
                </Link>
            </StyledNav>
        <AuthImage>
          <h2>Your museum accessible to the world...</h2>
            <img src="https://res.cloudinary.com/carlos-hm/image/upload/v1576735041/Muum/01_r_hjortshoj_blox_186_home_sez_soet9k.jpg" alt="Musuem"/>
          <AuthForm
            onSubmit={ e => {
              context.handleSignup(e)
              this.toggle()
            }}
            >
            <h3>Signup</h3>
              <input
                name="name"
                placeholder="your name"
                type="text"
                value={context.formSignup.name}
                onChange={e => context.handleInput(e, 'formSignup')}
                required
                />
              <label>name</label>
              <br/>
              <input
                name="email"
                placeholder="email"
                type="email"
                value={context.formSignup.email}
                onChange={e => context.handleInput(e, 'formSignup')}
                required
                />
              <label>email</label>
              <br/>
              <input
                name="password"
                placeholder="password"
                type="password"
                value={context.formSignup.password}
                onChange={e => context.handleInput(e, 'formSignup')}
                required
                />
              <label>password</label>
              <br/>
              {
              (context.error) ?
              <h4 style={{color:"#FF4B47", marginTop:"0"}}>User already exists</h4> : null
              }
              <button htmltype="submit">Signup</button>
            </AuthForm>
            </AuthImage>
          </>
      )}
      </MyContext.Consumer>
    )
  }
}

SignupContainer.contextType = MyContext;