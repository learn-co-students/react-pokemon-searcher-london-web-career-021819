import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import Filter from './Filter'

export default class PokemonCollection extends Component {

render() {
  return (
    <div className="ui centered grid container">
        < Filter
          pokemon={this.props.pokemons}
          sortByNameDesc={this.props.sortByNameDesc}
          sortByNameAsc={this.props.sortByNameAsc}
          sortByWeightDesc={this.props.sortByWeightDesc}
          sortByWeightAsc={this.props.sortByWeightAsc}
          sortByHeightDesc={this.props.sortByHeightDesc}
          sortByHeightAsc={this.props.sortByHeightAsc}
        />
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
