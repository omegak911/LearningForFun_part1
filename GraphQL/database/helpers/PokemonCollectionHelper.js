import PokemonCollection from '../collections/PokemonCollection';

const addPokemon = ({ id, name, type, image }) => {
  let pokemon = new PokemonCollection({
    id,
    name,
    type,
    image
  })
  return pokemon.save();
}



export { addPokemon, findPokemon };