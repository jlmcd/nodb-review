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
      <div>
        {this.state.grassArr.map(pokemon => (
          <Grass pokeData={pokemon}/>
        ))}
      </div>
    )
  }
}