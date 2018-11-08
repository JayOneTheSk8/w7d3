import React from 'react';

// export const PokemonDetail = (props) => {
//   return (
//     <h1> hello from detail </h1>
//   );
// };
export default class PokemonDetail extends React.Component{
  componentDidMount() {
    this.props.requestPokemon(this.props.pokemon.id);
  }

  render() {
    debugger
    const pokemon = this.props.pokemon;
    return (
      <h1>{pokemon.name}</h1>
    );
  }
}
