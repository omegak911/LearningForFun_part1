import express from 'express';
import path from 'path';
import parser from 'body-parser';
import graphqlHTTP from 'express-graphql'
import db from '../database/index';
import schema from './components/Schema';

const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', new graphqlHTTP({
    schema,
    graphiql: true
  }))

app.listen(port, () => console.log('Server is listening on port: ', port));