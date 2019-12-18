import React, { Component } from 'react';
import { MyContext } from '../../context'

export default class  SignupContainer extends Component {
  componentDidUpdate() {
    if(this.context.loggedUser) {
      //console.log(this.context.user)
      return this.props.history.push(`/profile/${this.context.user._id}`)
    }
  }

  render() {

    return (
      <MyContext.Consumer>
      { context => (
        <form 
          onSubmit={ e => {
            context.handleSignup(e)
            //props.history.push('/login')
          }}
          >
            <input
              name="name"
              placeholder="name"
              type="text"
              value={context.formSignup.name}
              onChange={e => context.handleInput(e, 'formSignup')}
              />
            <br/>
            <input
              name="email"
              placeholder="email"
              type="email"
              value={context.formSignup.email}
              onChange={e => context.handleInput(e, 'formSignup')}
              />
            <br/>
            <input
              name="password"
              placeholder="password"
              type="password"
              value={context.formSignup.password}
              onChange={e => context.handleInput(e, 'formSignup')}
              />
  
            <br/>
            <button htmltype="submit">Signup</button>
          </form>
      )}
      </MyContext.Consumer>
    )
  }
}

SignupContainer.contextType = MyContext;