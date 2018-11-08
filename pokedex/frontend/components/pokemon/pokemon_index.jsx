import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.requestAllPokemon();
  }

  render() {

    const all_pokemon = this.props.pokemon.map((poke, idx) => {
      return (
        <PokemonIndexItem pokemon={poke} key={idx}/>
      );
    });

    return (
      <ul>
        {all_pokemon}
      </ul>
    );
  }
}
