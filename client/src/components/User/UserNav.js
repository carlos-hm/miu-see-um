import React, { Component } from 'react';
import { StyledNav } from '../../styles/componets';
import { MyContext } from '../../context'

export default class UserNav extends Component {
  render () {
    return (
      <MyContext.Consumer>
      {context => (
        <StyledNav>
          <figure>
            <img src="https://res.cloudinary.com/carlos-hm/image/upload/v1576561407/Muum/MuuM_logo_r0fbjo.png" alt="MuuM logo"/>
            { (this.props.museum) ?  
            <img src={this.props.museum.logoURL} alt="Museum logo"/> : null
            }
          </figure>
          <form
            onSubmit={ e => {
              context.handleLogout(e)
            }} >
            <button className="icon"  style={{backgroundImage:"url(/ic-exit-to-app.svg)", border:"none"}} type="submit">
              Logout
            </button>
          </form>
        </StyledNav>
      )}
      </MyContext.Consumer>
    )
  }
}


UserNav.contextType = MyContext;