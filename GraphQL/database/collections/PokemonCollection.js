import mongoose from 'mongoose';

const pokemonCollectionSchema = mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  image: String,
})

const PokemonCollection = mongoose.model('PokemonCollection', pokemonCollectionSchema);

export default PokemonCollection;