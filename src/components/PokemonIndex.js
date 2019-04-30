import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import {Search} from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: '',
    filter: 'all'
  }

  componentDidMount = () => {
    return fetch('http://localhost:3000/pokemon').then(res => res.json()).then(jso => this.setState({pokemon: jso}))
  }

  addPokemon = (poke) => {
    this.setState({
      pokemon: [
        poke, ...this.state.pokemon
      ]
    })
  }

  weightFilter = (event) => {
    let filter = ''
    switch (event.target.name) {
      case 'all':
        filter = 'all'
        break
      case 'fat':
        filter = 'fat'
        break
      case 'small':
        filter = 'small'
        break
      default:
        filter = 'all'
    }
    this.setState({filter: filter})
  }

  filteredPokemon = () => {
    let filtered = this.state.pokemon.filter(poke => poke.name.includes(this.state.searchTerm))
    switch (this.state.filter) {
      case 'all':
        return filtered.filter(poke => poke.weight > 0)
        break
      case 'fat':
        return filtered.filter(poke => poke.weight > 2000)
        break
      case 'small':
        return filtered.filter(poke => poke.weight < 100)
        break
      default:
        return filtered.filter(poke => poke.weight > 0)
    }
  }

  render() {
    return (<div>
      <h1>Pokemon Searcher</h1>
      <br/>
      <Search onSearchChange={_.debounce((e, {value}) => {
          this.setState({searchTerm: value})
        }, 500)} showNoResults={false}/>
      <br/>
      <button name='all' onClick={this.weightFilter}>All Pokes</button>
      <button name='fat' onClick={this.weightFilter}>FatBoys</button>
      <button name='small' onClick={this.weightFilter}>SmallBoys</button>
      <br/><br/>
      <PokemonForm addPokemon={this.addPokemon}/>
      <br/>
      <PokemonCollection pokemon={this.filteredPokemon()}/>
    </div>)
  }
}

export default PokemonPage
//
