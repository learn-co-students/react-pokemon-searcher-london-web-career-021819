import React from 'react'

const Stats = props => (
  <div>
    <p>
      Stats :
    </p>
    <p>
      Attack = {props.pokemon.stats[3].value}
      &nbsp;&nbsp;
      Defense = {props.pokemon.stats[2].value}
    </p>
    <p>
      Speed = {props.pokemon.stats[4].value}
      &nbsp;&nbsp;
      Special = {props.pokemon.stats[1].value}
    </p>
  </div>
)

export default Stats
