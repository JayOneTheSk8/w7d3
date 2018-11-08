import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.pokeId];
  return {
    name: pokemon.name || {name: ''}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPokemon: (id) => {
      dispatch(requestPokemon(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

// map state to props...
// map dispatch to props...
