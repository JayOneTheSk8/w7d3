import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

import { Route } from 'react-router-dom';

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
      <div>
        <Route path="/pokemon/:pokeId" component={PokemonDetailContainer}/>
        <ul>
          {all_pokemon}
        </ul>
      </div>
    );
  }
}
