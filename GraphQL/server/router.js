import express from 'express';
import graphqlHTTP from 'express-graphql'
//import query handlers here
import userSchema from './components/AuthSchema';

const router = express.Router();

router
  // .use('/pokemon')
  .use('/auth', new graphqlHTTP({
    schema: userSchema,
    graphiql: true
  }));

export default router;