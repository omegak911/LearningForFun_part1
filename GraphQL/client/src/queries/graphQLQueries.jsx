import { gql } from 'apollo-boost';

const loginQuery = gql`
query($username: String!, $password: String!){
  login(username: $username, password: $password) {
    id
    username
    pokemon {
      id
      name
      type
      image
    }
  }
}
`

// const signupMutation = gql`
// mutation($username: String!, $password: String!){
//   addUser(username: $username!, password: $password) {
//     id
//     username
//   }
// }
// `

const createPokemonMutation = gql`
mutation($id: ID!, $name: String!, $type: String!, $image: String!) {
  addPokemon(id: $id, name: $name, type: $type, image: $image) {
    id
    name
    type
    image
  }
}
`

const catchPokemonMutation = gql`
mutation($userId: ID!, $id: ID!, $name: String!, $type: String!, $image: String!) {
  catchPokemon(userId: $userId, id: $id, name: $name, type: $type, image: $image) {
    id
    name
    type
    image
  }
}
`

const allPokemonQuery = gql`
{
  pokemon {
    id
    name
    type
    image
  }
}
`

// export { loginQuery, signupMutation, allPokemonQuery };

export { loginQuery, allPokemonQuery, createPokemonMutation, catchPokemonMutation };