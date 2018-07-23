import mongoose from 'mongoose';

const userPokemonCollectionSchema = mongoose.Schema({
  userId: String,
  id: Number,
  name: String,
  type: String,
  image: String,
})

const UserPokemonCollection = mongoose.model('UserPokemonCollection', userPokemonCollectionSchema);

export default UserPokemonCollection;