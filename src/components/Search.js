import React from 'react'

class Search extends React.Component {


  handleChange = (e) => {

  }

  render () {
    return (
      <input onChange={e => this.props.handleFilter(e.target.value)} className="search-bar" type='text' placeholder="Search a Pokemon" />
    )
  }
}

export default Search