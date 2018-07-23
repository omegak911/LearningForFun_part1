import express from 'express';
import graphqlHTTP from 'express-graphql'

import userSchema from './components/AuthSchema';
import pokemonSchema from './components/PokemonSchema';

const router = express.Router();

router
  .use('/pokemon', new graphqlHTTP({
    schema: pokemonSchema,
    graphiql: true
  }))
  .use('/auth', new graphqlHTTP({
    schema: userSchema,
    graphiql: true
  }));

export default router;