import React from 'react'
import './enlace.css'

const Enlace = (props) => {
  let urlI = '#enlaces'
  if(props.enlace.url.length > 0){
    urlI = props.enlace.url
  }
  return (
    <a href={urlI}>
      <div className='website__enlace-container'>
          <img src={props.enlace.img} alt={props.enlace.nombre}/>
          <h3>{props.enlace.nombre}</h3>
      </div>
    </a>
  )
}

export default Enlace