import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  shouldComponentUpdate () {
    return !this.props.mouseDown
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(p => <PokemonCard key={p.id} pokemon={p} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
