import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    };
  }

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createPokemon = () => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        name: this.state.name,
        stats: [{ value: this.state.hp, name: "hp" }],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    }).then(resp=> resp.json)
    .then(formPokemon => this.props.addPokemon(formPokemon))
    .catch(error => console.error(error))
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.createPokemon();
    this.setState({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              onChange={this.handleOnChange}
              value={this.state.name}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              onChange={this.handleOnChange}
              value={this.state.hp}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              onChange={this.handleOnChange}
              value={this.state.frontUrl}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              onChange={this.handleOnChange}
              value={this.state.backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
