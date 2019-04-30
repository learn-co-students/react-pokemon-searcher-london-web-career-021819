import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchQuery: ""
  };

  // fetch the pokemons here:
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pokemons: json
        });
      });
  }

  // set the searchQuery state when entered
  // use the state to filter the list of pokemons to be rendered by
  // PokemonCollection
  handleSearchChange = (event, { value }) => {
    // debugger;
    this.setState({
      searchQuery: value
    });
  };

  // add new pokemon to the existing state
  // this is passed to PokemonForm as a prop
  addPokemon = pokemon => {
    this.setState({ pokemons: [...this.state.pokemons, pokemon] });
  };

  render() {
    // pass a list of pokemons filtered by search
    const searchResults = this.state.pokemons.filter(p =>
      p.name.includes(this.state.searchQuery)
    );
    const sorted = searchResults.sort((pokA, pokB) => {
      if (pokA.name < pokB.name) return -1;
      return 1;
    });

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearchChange, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemons={sorted} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
