import { 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLSchema, 
  GraphQLString, 
  GraphQLList, 
  GraphQLNonNull 
} from 'graphql';

import { assignUserPokemon, seePokemonCaught } from '../../database/helpers/UserPokemonCollectionHelper';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    pokemon: {
      type: new GraphQLList(UserPokemonType),
      resolve(parent, args) {
        console.log(parent.id)
        return seePokemonCaught({ userId: parent.id});
      }
    }
  })
})

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    image: { type: GraphQLString },
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

export { UserType, PokemonType, UserPokemonType };