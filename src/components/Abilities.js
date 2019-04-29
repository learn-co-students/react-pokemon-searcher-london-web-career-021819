import React from 'react'

const Abilities = props => (
  <div>
    <p>
      Abilities :
    </p>
    <p>
      {props.pokemon.abilities}
    </p>
    <br/>
  </div>
)

export default Abilities
