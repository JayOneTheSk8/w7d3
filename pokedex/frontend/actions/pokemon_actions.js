import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = (pokemon) => {
  return { type: RECEIVE_ALL_POKEMON, pokemon };
};

export const receivePokemon = (response) => {
  return {type: RECEIVE_POKEMON, response};
};

export const requestAllPokemon = () => {
  return (dispatch) => {
    return APIUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)));
  };
};

export const requestPokemon = (id) => {
  return (dispatch) => {
    return APIUtil.fetchPokemon(id).then(response => dispatch(receivePokemon(response)));
  };
};
