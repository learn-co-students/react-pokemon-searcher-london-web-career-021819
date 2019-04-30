import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: '',
    hpFilter: 0,
    filterElValue: 0
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

  handleFilterElChange = e => {this.setState({ filterElValue: e.target.value })}

  handleMouseUp = e => {
    this.setState({
      hpFilter: e.target.value
    })
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
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
        <label>Filter by hp: </label>
        <input type='range' name='hp' min={minHp} max={maxHp} step='10' onMouseUp={this.handleMouseUp} onChange={this.handleFilterElChange}/>
        {this.state.filterElValue !== 0 && `  ${this.state.filterElValue}`}
        <br />
        <br />
        <PokemonCollection pokemon={filteredPokemon} mouseDown={this.state.mouseDown}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
