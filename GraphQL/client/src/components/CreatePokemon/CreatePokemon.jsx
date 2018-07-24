import React, { Component } from 'react';
import { graphql } from 'react-apollo'

import { createPokemonMutation } from '../../queries/graphQLQueries';

import './CreatePokemon.css';

class CreatePokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      type: null,
      image: null
    }
  }

  createNewPokemon = (e) => {
    e.preventDefault();
    const { id, name, type, image} = this.state;
    this.props.createPokemonMutation({
      variables: {
        id,
        name,
        type,
        image
      }
    })
    // console.log(this.props)

    e.target.reset();
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div id="create">
        {/* <img src="https://vignette.wikia.nocookie.net/pokemon/images/9/95/Charmander-GO.png/revision/latest?cb=20160809154953" /> */}
        <form onChange={this.handleInput} onSubmit={this.createNewPokemon}>
          <input name="id" placeholder="id"/>
          <input name="name" placeholder="name"/>
          <input name="type" placeholder="type"/>
          <input name="image" placeholder="image"/>
          <button type="submit">CREATE</button>
        </form>
      </div>
    )
  }
}

export default graphql(createPokemonMutation, { name: 'createPokemonMutation' })(CreatePokemon);