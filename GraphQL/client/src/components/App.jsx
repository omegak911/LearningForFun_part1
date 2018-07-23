import React, { Component } from 'react';

import Login from '../components/Landing/Login';
import Signup from '../components/Landing/Signup';
import Home from '../components/Home/Home';
import Nav from '../components/Nav/Nav';
import Wild from '../components/Wild/Wild';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      signup: false,
      home: false,
      wild: false,
      currentPage: 'login',
    }
  }

  handleLogin = (value) => {
    value.preventDefault();
    if (value === 'signup') {
      this.setState({ login: false, signup: true, currentPage: 'signup' })
    } else {
      let username = value.target[0].value;
      let password = value.target[1].value;

      //graphql server call
      this.setState({ login: false, home: true, currentPage: 'home'})
    }
    value.target.reset();
  }

  handleSignup = (value) => {
    value.preventDefault();
    if (value === 'login') {
      this.setState({ login: true, signup: false, currentPage: 'login' })
    } else {
      let username = value.target[0].value;
      let password = value.target[1].value;

      //graphql server call
      this.setState({ signup: false, home: true, currentPage: 'home'})
    }
    value.target.reset();
  }

  handleNav = (navigateTo) => {
    let { currentPage } = this.state;
    if (navigateTo === 'logout') {
      this.setState({ [currentPage]: false, login: true })
    } else {
      this.setState({ [navigateTo]: true, [currentPage]: false, currentPage: navigateTo });
    }
  }

  render() {
    let { login, signup, home, wild, currentPage } = this.state;
    return (
      <div>
        {login && <Login handleLogin={this.handleLogin} />}
        {signup && <Signup handleSignup={this.handleSignup} />}
        {!login && !signup && <Nav handleNav={this.handleNav}/>}
        {home && <Home />}
        {wild && <Wild />}
      </div>
    )
  }
}

export default App;