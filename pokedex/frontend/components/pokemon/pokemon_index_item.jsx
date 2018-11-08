import React from 'react';
import { Link } from 'react-router-dom';

export default class PokemonIndexItem extends React.Component {
  render() {
    return (
      <Link to={`/pokemon/${this.props.pokemon.id}`}>
        <li>
          <img src={this.props.pokemon.image_url}/>
        </li>
      </Link>
    );
  }
}
