import React, { Component } from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

export default class PokemonPage extends Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }

/// FETCH POKEMON DATA
componentDidMount(){
  fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => {
      this.setState({
        pokemons: pokemons})
} ) }

/// POST POKEMON DATA
createPokemon = pokemon => {
  fetch('http://localhost:3000/pokemon', {
    method: "post",
    headers: { "Content-type" : "application/json" },
    body: JSON.stringify(pokemon) } )
  .then(resp => resp.json())
  .then(this.setState({
      pokemons: [...this.state.pokemons, pokemon]
} ) ) }

/// DELETE POKEMON DATA
destroyPokemon = pokemon => {
  fetch(`http://localhost:3000/pokemon/${pokemon.id}`, {
    method: "delete" })
  .then(response => response.json())
  .then(this.setState(prevState => ({
    pokemons: [...prevState.pokemons.filter(x => x.id !== pokemon.id)]
} ) ) ) }

/// UPDATE SEARCH TERM STATE
updateSearchTerm = searchTerm => {
   this.setState({
     searchTerm: searchTerm
} ) }

/// FILTER POKEMON IN CONTAINER FROM SEARCH
filteredPokemon = () => {
  return this.state.pokemons.filter(pokemon =>
    pokemon.name.includes(this.state.searchTerm))
}

render() {
  return (
    <div>
        <h1> Pokemon </h1>
        <h3> Gotta Catch Em All! </h3>

      <hr/>

      <PokemonForm
        createPokemon={this.createPokemon}
      />

    <br/>
      <Search
      onSearchChange={ event => this.updateSearchTerm(event.target.value) }
      showNoResults={false}
      />

    <br/>
      <PokemonCollection
        pokemons={this.filteredPokemon()}
        destroyPokemon={this.destroyPokemon}
      />

    </div>
) }

}
