import React, { Component } from 'react'
import { MyContext } from '../../context'

export default class LoginContainer extends Component {
  componentDidMount() {
    console.log(this.context.loginForm)
    if(this.context.loggedUser) {
      console.log('lol')
      return this.props.history.push('/profile')
    }
  }

  render() {
    console.log(this.context)
    return (
      <MyContext.Consumer>
        {context => (
          <form
            onSubmit={ e => {
              context.handleLogin(e, () => {
                this.props.history.push('/profile')
              })
            }}
          >
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
              value={context.loginForm.password}
              onChange= { e => context.handleInput(e, 'loginForm')}
              />

            <button htmltype="submit">Login</button>
          </form>
        )}
      </MyContext.Consumer>
    )
  }
}

LoginContainer.contextType = MyContext;