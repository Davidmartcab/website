import React from 'react'
import './patro.css'

const Patro = (props) => {
  return (
    <div>
        <img src={props.patro.url} />
        <h3>{props.patro.nombre}</h3>
    </div>
  )
}

export default Patro