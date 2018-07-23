import {
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import { addPokemon, findPokemon } from '../../database/helpers/PokemonCollectionHelper';
import { assignUserPokemon, seePokemonCaught } from '../../database/helpers/UserPokemonCollectionHelper';
import { postValidateUser } from '../../database/helpers/UserHelper';

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    image: { type: GraphQLString },
  })
})

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    pokemon: {
      type: new GraphQLList(UserPokemonType),
      resolve(parent, args) {
        console.log(parent.id)
        return seePokemonCaught({ userId: parent.id});
      }
    }
  })
})

const UserPokemonType = new GraphQLObjectType({
  name: 'UserPokemon',
  fields: () => ({
    userId: { type: GraphQLID },
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    image: { type: GraphQLString },
  })
})

const PokemonQueryType = new GraphQLObjectType({
  name: 'PokemonQuery',
  fields: {
    pokemon: {
      type: PokemonType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) }},
      resolve(parent, args){
        return findPokemon(args);
      }
    },
    userPokemon: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID)}},
      resolve(parent, args) {
        return postValidateUser(args);
      }
    }
  }
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
    },
    catchPokemon: {
      type: UserPokemonType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        id: { type: new GraphQLNonNull(GraphQLID) }, 
        name: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return assignUserPokemon(args);
      }
    }
  }
})

export default new GraphQLSchema({
  query: PokemonQueryType,
  mutation: Mutation
})