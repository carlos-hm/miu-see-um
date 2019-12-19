import React from 'react';
import { StyledNav } from '../../styles/componets';
import { MyContext } from '../../context'

export default function UserNav(props) {
  return (
    <MyContext.Consumer>
    {context => (
      <StyledNav>
        <figure>
          <img src="https://res.cloudinary.com/carlos-hm/image/upload/v1576561407/Muum/MuuM_logo_r0fbjo.png" alt="MuuM logo"/>
          { (props.museum) ?  
          <img src={props.museum.logoURL} alt="Museum logo"/> : null
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


UserNav.contextType = MyContext;