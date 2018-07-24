import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, graphql, compose } from 'react-apollo';

import Login from '../components/Landing/Login';
import Signup from '../components/Landing/Signup';
import Home from '../components/Home/Home';
import Nav from '../components/Nav/Nav';
import Wild from '../components/Wild/Wild';
import CreatePokemon from '../components/CreatePokemon/CreatePokemon';

// import { loginQuery, signupMutation } from '../queries/graphQLQueries';

const client = new ApolloClient({
  url: 'http://localhost:3000/graphql'
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      signup: false,
      home: false,
      wild: false,
      create: false,
      currentPage: 'login',
      id: null,
      username: null,
      password: null,
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
      this.setState({ login: false, home: true, currentPage: 'home', username, password })
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

  updateId = (id) => {
    this.setState({ id })
  }

  render() {
    let { login, signup, home, wild, create, currentPage, username, password } = this.state;
    return (
      <div>
        <ApolloProvider client={client}>
          {login && <Login handleLogin={this.handleLogin} />}
          {signup && <Signup handleSignup={this.handleSignup} />}
          {!login && !signup && <Nav handleNav={this.handleNav}/>}
          {home && <Home username={username} password={password} updateId={this.updateId}/>}
          {wild && <Wild />}
          {create && <CreatePokemon />}
        </ApolloProvider>
      </div>
    )
  }
}

// export default compose(
//   graphql(loginQuery, { name: "loginQuery" }),
//   graphql(signupMutation, { name: "signupMutation" }))
//   (App);
export default App;