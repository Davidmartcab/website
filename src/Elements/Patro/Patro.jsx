import React from 'react'
import './patro.css'

const Patro = (props) => {
  let urlI = '#patrocinadores'
  if(props.patro.url.length > 0){
    urlI = props.patro.url
  }
  return (
    <a href={urlI}>
      <div className='website__patro-container'>
          <img src={props.patro.img} />
          <h3>{props.patro.nombre}</h3>
      </div>
    </a>
  )
}

export default Patro