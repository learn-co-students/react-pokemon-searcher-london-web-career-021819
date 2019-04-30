import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  toggleCard = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const {sprites, name, stats} = this.props.pokemon

    return (
      <Card onClick={this.toggleCard}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.clicked ? sprites.back : sprites.front} />
          </div>
          <div className="content">
            <div className="header">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[stats.length-1].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
