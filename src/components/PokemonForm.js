import React from 'react'
import {Form} from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  onChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://10.218.2.84:3000/pokemon', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [
          {
            value: this.state.hp,
            name: "hp"
          }
        ],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    }).then(res => res.json())
    .then(jso => this.props.addPokemon(jso))
  }

  render() {
    return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid="fluid" label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} />
          <Form.Input fluid="fluid" label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.onChange}/>
          <Form.Input fluid="fluid" label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.onChange}/>
          <Form.Input fluid="fluid" label="Back Image URL" placeholder="url" name="backUrl"  value={this.state.backUrl} onChange={this.onChange}/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>)

  }
}

export default PokemonForm
