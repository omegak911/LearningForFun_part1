import { 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLSchema, 
  GraphQLString, 
  GraphQLList, 
  GraphQLInt, 
  GraphQLNonNull 
} from 'graphql'

import validateUser from '../../../database/helpers/UserHelper';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    // pokemons: {

    // }
  })
})

const UserQueryType = new GraphQLObjectType({
  name: 'UserQuery',
  fields: {
    user: {
      type: UserType,
      args: { username: { type: GraphQLString }, password: { type: GraphQLString }},
      resolve(parent, args) {
        return validateUser(args)
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'UserMutation',
  fields: {
    addUser: {
      type: UserType,
      args: { 
        username: { type: new GraphQLNonNull(GraphQLString) }, 
        password: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return validateUser(args);
      }
    }
  }
})

export default new GraphQLSchema({
  query: UserQueryType,
  mutation: Mutation
})