import React, { Component, createContext } from 'react'
import AUTH_SERVICE from './services/AuthService';

//import MuseumService from './services/MuseumService';

//const museumService = new MuseumService();

export const MyContext = createContext()


class MyProvider extends Component {
  state = {
    loggedUser: false,
    formSignup: {
      name: '',
      email: '',
      password: ''
    },
    loginForm: {
      email: '',
      password: ''
    },
    user: {},
    error: false
  }

  componentDidMount() {
    if(document.cookie) {
      AUTH_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({ loggedUser: true, user: data.user })
        })
        .catch(err => console.log(err))
    }
  }


  handleInput = (e, obj) => {
    const a = this.state[obj]
    const key = e.target.name
    a[key] = e.target.value
    this.setState({ obj: a })
  }

  // handleInput = (e, obj) => {
    

  // //   this.setState(prevState => ({
  // //     ...prevState,
  // //     someProperty: {
  // //         ...prevState.someProperty,
  // //         someOtherProperty: {
  // //             ...prevState.someProperty.someOtherProperty, 
  // //             anotherProperty: {
  // //                ...prevState.someProperty.someOtherProperty.anotherProperty,
  // //                flag: false
  // //             }
  // //         }
  // //     }
  // // }))
  // }

  handleSignup = async e => {
    e.preventDefault()
    try {
      await AUTH_SERVICE.signup(this.state.formSignup).then(okey => {
        if (okey) {
          window.location.href = "/login";
        }
      })
    } catch (err) {
      this.setState({...this.state, error: true})
      console.log(this.state)
    }
    //console.log('User created', data);
  }

  handleLogin = (e, cb) => {
    e.preventDefault()
    AUTH_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        this.setState({ loggedUser: true, user: data.user })
        cb()
      })
      .catch(err => {
        this.setState({...this.state, error: true})
        console.log(this.state)
      })
  }

  handleLogout = async cb => {
    const  adios = await AUTH_SERVICE.logout()
    console.log(adios)
    window.localStorage.clear()
    this.setState({ loggedUser: false, user: {} })
    cb()
  }

  render(){
    //console.log(this.state)
    return (
      <MyContext.Provider
        value={{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          user: this.state.user,
          error: this.state.error
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;