import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    imgToggled: false
  };

  // function to toggle the images by changing the state
  handleClick = () => {
    this.setState({
      imgToggled: !this.state.imgToggled
    });
  };

  render() {
    const pokemon = this.props.pokemon;
    // find the right stat and return the value to display on card
    const hp = pokemon.stats.find(stat => stat.name === "hp").value;
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            {this.state.imgToggled ? (
              <img src={`${pokemon.sprites.back}`} alt="oh no!" />
            ) : (
              <img src={`${pokemon.sprites.front}`} alt="oh no!" />
            )}
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
