import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const {clicked} = this.state
    const {name, sprites, stats} = this.props.pokemon
    // debugger;

    return (
      <Card>
        <div>
          <div className="image" >
            <img alt="oh no!" src={clicked ? sprites.back : sprites.front} onClick={this.handleClick} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(s => s.name === 'hp' ).value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
