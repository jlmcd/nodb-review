import React from 'react'

const Pokemon = (props) => {
  return (
    <div>
      {props.data.name}
      <img onClick={() => props.releaseFn(props.data.id)} src={props.data.img} alt=""/>
    </div>
  )
}

export default Pokemon