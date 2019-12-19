import React, { Component } from 'react'
import { MyContext } from '../../context'
import { Link } from 'react-router-dom';
import { StyledNav, AuthForm, AuthImage } from '../../styles/componets'

export default class LoginContainer extends Component {
  componentDidUpdate() {
    if(this.context.loggedUser) {
      return this.props.history.push(`/profile/${this.context.user._id}`)
    }
  }

  render() {
    const {error} = this.context
    return (
      <MyContext.Consumer>
        {context => (
          <>
          <StyledNav>
            <figure>
            <Link to="/">
              <img style={{border: "none"}}
              src="https://res.cloudinary.com/carlos-hm/image/upload/v1576561407/Muum/MuuM_logo_r0fbjo.png" alt="MuuM logo"/>
            </Link>
            </figure>
              <Link to="/signup" className="authLink">
                Signup
              </Link>
          </StyledNav>
          
          <AuthImage>
          <h2>Welcome</h2>
            <img src="https://res.cloudinary.com/carlos-hm/image/upload/v1576733062/Muum/1200px-Louvre_Museum_Wikimedia_Commons_e1ppog.jpg" alt="Musuem"/>
          
          <AuthForm
            onSubmit={ e => {
              context.handleLogin(e, () => {
                this.props.history.push(`/profile/${this.context.user._id}`)
              })
            }}
          >
          <h3>Login</h3>
            <input
              name="email"
              placeholder="email"
              type="email"
              value={this.context.loginForm.email}
              onChange= { e => context.handleInput(e, 'loginForm')}
              />
            <input
              name="password"
              placeholder="password"
              type="password"
              value={context.loginForm.password}
              onChange= { e => context.handleInput(e, 'loginForm')}
              />
              <br/>
              {
              (error) ?
              <h4 style={{color:"#FF4B47", marginTop:"0"}}>Email or password incorrect</h4> : null
              }
            <button htmltype="submit">send</button>
          </AuthForm>
          </AuthImage>
          </>
        )}
      </MyContext.Consumer>
    )
  }
}

LoginContainer.contextType = MyContext;