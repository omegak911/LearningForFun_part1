import UserPokemonCollection from '../collections/UserPokemonCollection';
import PokemonCollection from '../collections/PokemonCollection';

const assignUserPokemon = ({ userId, id, name, type, image}) => {
  let capture = new UserPokemonCollection({
    userId,
    id,
    name,
    type,
    image,
  })
  return capture.save();
}

const seePokemonCaught = ({ userId }) => 
  UserPokemonCollection.find({ userId });

export { assignUserPokemon, seePokemonCaught };