import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/graphqlpokemon')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));
db.once('open', () => console.log('mongodb is connected!'));

export default db;