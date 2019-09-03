import React from 'react'
import _ from 'lodash'

import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import HPFilter from './HPFilter'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: '',
    hpFilter: 0
  }

  componentDidMount () {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemon => this.setState({
        pokemon
      })
    )
  }

  handleSearchChange = (e, {value}) => { this.setState({searchTerm: value})}

  handleFilterChange = e => {this.setState({ hpFilter: e.target.value })}

  addPokemon = (pokemon) => {
    this.setState({
      pokemon: [pokemon, ...this.state.pokemon]
    });
  }

  render() {
    const {pokemon, searchTerm} = this.state

    const displayedPokemon = searchTerm
    ? pokemon.filter(p => p.name.includes(searchTerm))
    : pokemon

    const filteredPokemon = displayedPokemon.filter(p => p.stats.find(p => p.name === 'hp').value >= this.state.hpFilter)

    const minHp = Math.min(...this.state.pokemon.map(p => p.stats.find(p => p.name === 'hp').value))

    const maxHp = Math.max(...this.state.pokemon.map(p => p.stats.find(p => p.name === 'hp').value))

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <HPFilter minHp={minHp} maxHp={maxHp} handleFilterChange={this.handleFilterChange} hpFilter={this.state.hpFilter}/>
        <br />
        <PokemonCollection pokemon={filteredPokemon} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
