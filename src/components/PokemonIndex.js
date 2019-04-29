import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from './Search'
// import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm : ''
  };


  updateSearchTerm = (searchTerm) => {
    this.setState({searchTerm:searchTerm})
  }


  render() {

    const filteredPokemon = this.state.pokemon.filter(
      pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
    )

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search updateSearchTerm={this.updateSearchTerm} searchTerm={this.state.searchTerm}/>

        {/* <Search updateSearchTerm={this.updateSearchTerm} searchTerm={this.state.searchTerm} 
          onSearchChange={_.debounce(() => console.log("🤔"), 500)}
          showNoResults={false}
        /> */}
        <br />
        <PokemonCollection pokemon={filteredPokemon}/>
        <br />
        <PokemonForm />
      </div>
    );
  }

  componentDidMount() {
    this.getPokemonData();
  }

  getPokemonData() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(results => {
        this.setState({ pokemon: results });
      });
  }
}

export default PokemonPage;
