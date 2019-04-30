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
        <img src="https://fontmeme.com/permalink/190430/1e6bdb8a74099955b5b72d1eec249e82.png" alt=""/>
        <img className="App-logo" src="https://vignette.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" alt=""/>
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
