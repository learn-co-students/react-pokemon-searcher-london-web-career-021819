import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {
  state = {
    pokemonCollection: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemonCollection => this.setState({ pokemonCollection }))
  }

  handleSearchChange = (event, { value }) => {
    this.setState({ searchTerm: value })
  }

  addPokemon = pokemon => {
    this.setState({ pokemonCollection: [...this.state.pokemonCollection, pokemon] })
  }

  render() {
    const filteredPokemon = this.state.pokemonCollection.filter(pokemon =>
      pokemon.name.includes(this.state.searchTerm)
    )
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={filteredPokemon} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}


export default PokemonIndex
