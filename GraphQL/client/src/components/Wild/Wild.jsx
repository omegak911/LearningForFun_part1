import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { allPokemonQuery } from '../../queries/graphQLQueries';

class Wild extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.props.allPokemonQuery)
  }

  render() {
    let { data } = this.props
    return (
      <div>
        {data.loading ? 
          <div>LOADING</div> 
          : 
          <div>{data.pokemon.map(poke =>
            <div key={poke.id} index={poke.id}>
              <img src={poke.image} />
              <p>Id: {poke.id}</p>
              <p>Name: {poke.name}</p>
              <p>Type: {poke.type}</p>
            </div>
          )}</div>
        }
      </div>
    )
  }
}

export default graphql(allPokemonQuery)(Wild);