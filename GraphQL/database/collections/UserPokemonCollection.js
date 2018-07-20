import mongoose from 'mongoose';

const userPokemonCollectionSchema = mongoose.Schema({
  pokemonId: Number,
  userId: Number,
})

const UserPokemonCollection = mongoose.model('UserPokemonCollection', userPokemonCollectionSchema);

export default UserPokemonCollection;