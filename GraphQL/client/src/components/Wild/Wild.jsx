import React, { Component } from 'react';
import { COPYFILE_FICLONE_FORCE } from 'constants';
import { graphql, compose } from 'react-apollo';

import { allPokemonQuery, catchPokemonMutation, loginQuery } from '../../queries/graphQLQueries';

class Wild extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonInExistence: [],
      randomPokemon: null,
      catchFailed: false,
      catchSuccess: false,
    }
  }

  handlePokemonCollection = () => {
    if (!this.props.allPokemonQuery.loading && !this.state.randomPokemon) {
      const { pokemon } = this.props.allPokemonQuery;
      let randomIndex = Math.floor(Math.random() * pokemon.length);
  
      this.setState({
        pokemonInExistence: pokemon,
        randomPokemon: pokemon[randomIndex]
      })
    }
  }

  catchIt = () => {
    const { catchPokemonMutation, userId, username, password } = this.props;
    let { pokemonInExistence, randomPokemon } = this.state;
    let { id, name, type, image } = randomPokemon;
    let chance = Math.floor(Math.random() * 11);
    const context = this;
    let randomIndex = Math.floor(Math.random() * pokemonInExistence.length);
    if (chance > 6) {
      catchPokemonMutation({
        variables: {
          userId,
          id,
          name,
          type,
          image
        },
        refetchQueries: [{ query: loginQuery, variables: { username, password } }]
      })
      this.setState({ catchSuccess: true, randomPokemon: pokemonInExistence[randomIndex] })
    } else {
      this.setState({ catchFailed: true, randomPokemon: pokemonInExistence[randomIndex] });
      
      setTimeout(() => {
        context.setState({ catchSuccess: false, catchFailed: false })
      }, 5000);
    }
  }

  render() {
    let { allPokemonQuery } = this.props;
    let { randomPokemon, catchFailed, catchSuccess } = this.state;
    return (
      <div>
        {allPokemonQuery.loading && <div>LOADING</div>}
        {this.handlePokemonCollection()}
        {catchSuccess && <div>You caught it!</div>}
        {catchFailed && <div>It ran away!  Better luck next time</div>}
        {randomPokemon &&
          <div>
            <img src={randomPokemon.image} />
            <p>Id: {randomPokemon.id}</p>
            <p>Name: {randomPokemon.name}</p>
            <p>Type: {randomPokemon.type}</p>
          </div>
        }
        <button onClick={this.catchIt}>Catch!!</button>
      </div>
    )
  }
}

export default compose(
  graphql(allPokemonQuery, { name: 'allPokemonQuery' }),
  graphql(catchPokemonMutation, { name: 'catchPokemonMutation' })
)(Wild);