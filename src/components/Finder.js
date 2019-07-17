import React, {Component} from 'react'
import Grass from './Grass'
import axios from 'axios'

export default class Finder extends Component {
  constructor() {
    super()
    this.state = {
      grassArr: []
    }
  }
  componentDidMount() {
    axios.get('/api/grass').then(res => {
      this.setState({
        grassArr: res.data
      })
    })
  }
  render() {
    return (
      <div className='finder'>
        {this.state.grassArr.map(pokemon => (
          <Grass 
            key={pokemon.name} 
            pokeData={pokemon}
            catchFn={this.props.catchFn}
          />
        ))}
      </div>
    )
  }
}