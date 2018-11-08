import React from 'react';

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
        <li key={idx}>
          {poke.name}
          <br/>
          <img src={poke.image_url}></img>
        </li>
      );
    });

    return (
      <ul>
        {all_pokemon}
      </ul>
    );
  }
}
