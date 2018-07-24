import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { allPokemonQuery } from '../../queries/graphQLQueries';

class Wild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonInExistence: [],
      randomPokemon: null,
    }
  }

  handlePokemonCollection = () => {
    if (!this.props.data.loading && !this.state.randomPokemon) {
      const { pokemon } = this.props.data;
      let randomIndex = Math.floor(Math.random() * pokemon.length);
  
      this.setState({
        pokemonInExistence: pokemon,
        randomPokemon: pokemon[randomIndex]
      })
    }
  }

  render() {
    let { data } = this.props;
    let { randomPokemon } = this.state;
    return (
      <div>
        {data.loading && <div>LOADING</div>}
        {this.handlePokemonCollection()}
        {randomPokemon &&
          <div>
            <img src={randomPokemon.image} />
            <p>Id: {randomPokemon.id}</p>
            <p>Name: {randomPokemon.name}</p>
            <p>Type: {randomPokemon.type}</p>
          </div>
        }
      </div>
    )
  }
}

export default graphql(allPokemonQuery)(Wild);