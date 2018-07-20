import express from 'express';
import path from 'path';
import parser from 'body-parser';
import router from './router';

import db from '../database/index';

const app = express();
const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () => console.log('Server is listening on port: ', port));