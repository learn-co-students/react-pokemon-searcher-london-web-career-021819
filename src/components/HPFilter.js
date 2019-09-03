import React, { Component } from 'react'

class HPFilter extends Component {

  render() {
    return (
      <div style={{'bottomMargin': '1rem'}}>
        <label>Filter by hp: </label>
        <input
        type='range'
        name='hp'
        min={this.props.minHp}
        max={this.props.maxHp}
        value={this.props.hpFilter}
        step='10'
        onChange={this.props.handleFilterChange} />
        {this.props.hpFilter !== 0 && `  ${this.props.hpFilter}`}
      </div>
    )
  }
}

export default HPFilter
