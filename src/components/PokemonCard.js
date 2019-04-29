import React, { Component } from 'react'
import Abilities from './Abilities'
import Stats from './Stats'

export default class PokemonCard extends Component {

  state = {
    click: true
  }

handleClick = () => {
  this.setState({
    click: !this.state.click})
}

render() {
  return (
      <div className="ui card" onClick={this.handleClick} style={{margin: '0.5rem'}} >

        <div className="image">
          <img
            alt="pokemon"
            src=
              {
              this.state.click
              ? this.props.pokemon.sprites.front
              : this.props.pokemon.sprites.back
              }
          />
        </div>

        <div className="content">
          <div className="header">
            {this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1)}
          </div>
          <div className="description">
            {
            this.state.click
            ? <Abilities pokemon={this.props.pokemon} />
            : <Stats pokemon={this.props.pokemon} />
            }
          </div>
        </div>

        <div className="extra content">
          <i className="asterisk icon" />
            Type : {this.props.pokemon.types}
          <span className="right floated">
            <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} HP
          </span>
        </div>

        <div className="ui bottom attached button"
              onClick={() => this.props.destroyPokemon(this.props.pokemon) }>
          <i className="thumbs down icon">
          </i>
          Remove Pokemon
        </div>

      </div>
) }


}
