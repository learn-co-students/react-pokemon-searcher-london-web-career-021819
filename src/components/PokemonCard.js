import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    frontImage: true
  }

  frontBackImage = () => {
    this.setState({
      frontImage: !this.state.frontImage
    })
  }

  render() {
    const { name } = this.props.pokemon
    const { front, back } = this.props.pokemon.sprites
    return (
      <Card>
        <div>
          <div className="image">
            <img 
            src={this.state.frontImage ? front : back} 
            alt="oh no!" 
            onClick={this.frontBackImage}
            />
          </div>
          <div className="content">
            <div className="header">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
