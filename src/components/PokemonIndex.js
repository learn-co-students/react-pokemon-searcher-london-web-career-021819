import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = 'http://localhost:3000/pokemon'
export default class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ''

  }

  //fetch pokemon data
  componentDidMount(){
    fetch(URL)
      .then(r => r.json())
      .then(pokemons => this.setState({pokemons}))
  }

  onSearchChange = searchTerm => {
    this.setState({searchTerm})
  }

  filterPokemon = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
  }

  createPokemon = pokemon => {
    fetch(URL, {
      method: "post",
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(pokemon)
    })
    .then(resp => resp.json())
      .then(this.setState({pokemons: [...this.state.pokemons, pokemon]}))
  }

  //bonus
  sortByNameAsc = () => {

  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={event => this.onSearchChange(event.target.value)} showNoResults={false} />
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemon()}/>
      </div>
    )
  }
}
