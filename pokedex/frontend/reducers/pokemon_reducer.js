import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON:
      const newState = merge({}, state, { [action.response.pokemon.id]: action.response.pokemon });
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
