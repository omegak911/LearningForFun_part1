import {
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import { UserType, PokemonType, UserPokemonType } from './Type';
import { createUser, postValidateUser, validateUser } from '../../database/helpers/UserHelper';
import { addPokemon, getPokemon } from '../../database/helpers/PokemonCollectionHelper';
import { assignUserPokemon, seePokemonCaught } from '../../database/helpers/UserPokemonCollectionHelper';

const QueryType = new GraphQLObjectType({
  name: 'query',
  fields: {
    login: {
      type: UserType,
      args: { username: { type: GraphQLString }, password: { type: GraphQLString }},
      resolve(parent, args) {
        return validateUser(args);
      }
    },
    pokemon: {
      type: new GraphQLList(PokemonType),
      resolve(parent, args){
        return getPokemon();
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
  name: 'mutation',
  fields: {
    addUser: {
      type: UserType,
      args: { 
        username: { type: new GraphQLNonNull(GraphQLString) }, 
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return createUser(args);
      }
    },
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
  query: QueryType,
  mutation: Mutation
})