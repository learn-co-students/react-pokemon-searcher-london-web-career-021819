import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
// import { Search } from 'semantic-ui-react'
import Search from './Search'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      searchTerm: ''
    }
    this.handleFilter = this.handleFilter.bind(this)
    this.updatePokeOnPOST = this.updatePokeOnPOST.bind(this)
  }

  handleFilter (searchTerm) {
    this.setState({
      searchTerm
    })
  }

  updatePokeOnPOST (pokemon) {
    this.setState({
      pokemons: [pokemon, ...this.state.pokemons]
    })
  }

  filteredPoke = () => this.state.pokemons.filter(pokemon => {
     return pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  

  componentDidMount () {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => this.setState({ pokemons }))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        {/* <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} /> */}
        <Search handleFilter={this.handleFilter} />
        <br />
        <PokemonCollection pokemons={ this.filteredPoke() } />
        <br />
        <PokemonForm updatePokeOnPOST={this.updatePokeOnPOST} />
      </div>
    )
  }
}

export default PokemonPage
