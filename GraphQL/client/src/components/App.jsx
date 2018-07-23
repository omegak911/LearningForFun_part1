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

  handleLogin = (username, password) => {

  }

  handleSignup = (username, password) => {

  }

  handleNav = (navigateTo) => {
    let { currentPage } = this.state;
    this.setState({ [navigateTo]: true, [currentPage]: false, currentPage: navigateTo });
  }

  render() {
    let { login, signup, home, wild, currentPage } = this.state;
    return (
      <div>
        {login && <Login />}
        {signup && <Signup />}
        {!login && !signup && <Nav handleNav={this.handleNav}/>}
        {home && <Home />}
        {wild && <Wild />}
      </div>
    )
  }
}

export default App;