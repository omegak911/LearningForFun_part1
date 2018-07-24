import React, { Component } from 'react';
import { graphql } from 'react-apollo'

import { loginQuery } from '../../queries/graphQLQueries';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedId: false,
      caught: []
    }
  }

  handleData = () => {
    let { data } = this.props
    if (!data.loading && !this.state.updatedId) {
      this.setState({ updatedId: true, caught: data.login.pokemon });
      this.props.updateId(data.login.id);
    }
  }

  render() {
    let { caught } = this.state;
    return (
      <div>
        hello from Home
        {this.handleData()}
        {caught.length > 0 && caught.map(pokemon => <div key={pokemon.id}>{pokemon.name}</div>)}
      </div>
    )
  }
}

export default graphql(loginQuery, {
  options: (props) => {
    return {
      variables: {
        username: props.username,
        password: props.password,
      }
    }
  }
})(Home);