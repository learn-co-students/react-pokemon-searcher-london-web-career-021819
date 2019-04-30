import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ''
  }

  updateSearchTerm = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    })
    
  }

  filteredPokemon = () => {
    return this.state.pokemons.filter(pokemon =>
    pokemon.name.includes(this.state.searchTerm))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={event => this.updateSearchTerm(event.target.value)} showNoResults={false} />
        <br />
        <PokemonForm />
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()} />
      </div>
    )
  }
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokemons => {
      this.setState({
        pokemons: pokemons
      })
    })
  }

}

export default PokemonPage
