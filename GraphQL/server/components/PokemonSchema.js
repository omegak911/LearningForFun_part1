import {
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import { addPokemon, findPokemon } from '../../database/helpers/PokemonCollectionHelper';

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    image: { type: GraphQLString },
  })
})


const Mutation = new GraphQLObjectType({
  name: 'PokemonMutation',
  fields: {
    addPokemon: {
      type: PokemonType,
      args: { 
        id: { type: new GraphQLNonNull(GraphQLID) }, 
        name: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args){
        return addPokemon(args)
      }
    }
  }
})

export default new GraphQLSchema({
  query: PokemonQueryType,
  mutation: Mutation
})