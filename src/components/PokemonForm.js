import React from 'react'
import { Form } from 'semantic-ui-react'

export default class PokemonForm extends React.Component {

  state = {
    height: '',
    weight: '',
    name: '',
    abilities: [],
    moves: [],
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

formInputChange = event => {
  this.setState({
    [event.target.name]: event.target.value
} ) }

formInputSubmit = event => {
  event.preventDefault()
  event.target.reset()
  this.props.createPokemon({
    name: this.state.name,
    stats: [{},{},{},{},{},{ value: this.state.hp }],
    sprites: {front: this.state.frontUrl,
               back: this.state.backUrl }})
}

render() {
  return (
    <div>
      <Form onSubmit={this.formInputSubmit} onChange={this.formInputChange}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="HP" placeholder="HP" name="HP" />
          <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
          <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
        </Form.Group>
        <Form.Button> Submit </Form.Button>
      </Form>
    </div>
)}

}
