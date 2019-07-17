import React, {Component} from 'react'

export default class Grass extends Component {
  constructor() {
    super()
    this.state = {
      pokemonName: '',
      pokemonImg: ''
    }
  }
  render() {
    console.log(this.props.prop)
    return(
      <div>
        Grass
      </div>
    )
  }
}