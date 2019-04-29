import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

export default class PokemonCollection extends Component {

render() {
  return (
    <div className="ui centered grid container">
      {this.props.pokemons.map(pokemon =>
        < PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          destroyPokemon={this.props.destroyPokemon}
        />
      ) }
    </div>
) }

}
