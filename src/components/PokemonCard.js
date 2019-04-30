import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: true
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    const {pokemon} = this.props
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img
              src={this.state.clicked ? pokemon.sprites.front : pokemon.sprites.back} 
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
