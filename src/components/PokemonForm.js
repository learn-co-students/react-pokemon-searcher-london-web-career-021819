import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    const newPokemon = {
      name: this.state.name,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl,
      },
      stats: [{
        name: 'hp',
        value: parseInt(this.state.hp)
      }]
    }

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    }

    fetch('http://localhost:3000/pokemon', config)
      .then(res => res.json())
      .then(this.props.addPokemon)

    e.target.reset()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase()
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
