import { 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLSchema, 
  GraphQLString, 
  GraphQLList, 
  GraphQLNonNull 
} from 'graphql';

import { createUser, validateUser } from '../../database/helpers/UserHelper';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  })
})

const UserQueryType = new GraphQLObjectType({
  name: 'UserQuery',
  fields: {
    login: {
      type: UserType,
      args: { username: { type: GraphQLString }, password: { type: GraphQLString }},
      resolve(parent, args) {
        return validateUser(args);
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
        return createUser(args);
      }
    }
  }
})

export default new GraphQLSchema({
  query: UserQueryType,
  mutation: Mutation
})