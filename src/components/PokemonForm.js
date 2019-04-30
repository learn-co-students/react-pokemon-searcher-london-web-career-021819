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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const { name, hp, frontUrl, backUrl } = this.state
    event.preventDefault();
    fetch('http://localhost:3000/pokemon', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(    {
        "height": 4,
        "weight": 40,
        "id": 1,
        "name": name,
        "abilities": [
          "synchronize"
        ],
        "moves": [
          "pound",
          "mega-punch",
          "pay-day",
          "razor-wind",
          "whirlwind",
          "fly",
          "mega-kick",
          "horn-drill",
          "bubble-beam",
          "submission"
        ],
        "stats": [
          {
            "value": 100,
            "name": "speed"
          },
          {
            "value": 100,
            "name": "special-defense"
          },
          {
            "value": 100,
            "name": "special-attack"
          },
          {
            "value": 100,
            "name": "defense"
          },
          {
            "value": 100,
            "name": "attack"
          },
          {
            "value": hp,
            "name": "hp"
          }
        ],
        "types": [
          "psychic"
        ],
        "sprites": {
          "front": frontUrl,
          "back": backUrl
        }
      })
    }).then(resp => resp.json())
      .then(pokemon => {
        this.props.updatePokeOnPOST(pokemon)
        this.setState({
          name: '',
          hp: '',
          frontUrl: '',
          backUrl: ''
        })
      })
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" value={this.state.name} placeholder="Name" name="name" onChange={this.handleChange} />
            <Form.Input fluid label="hp" value={this.state.hp}  placeholder="hp" name="hp" onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" value={this.state.frontUrl} placeholder="url" name="frontUrl" onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" value={this.state.backUrl} placeholder="url" name="backUrl" onChange={this.handleChange} />
          </Form.Group>
          <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
