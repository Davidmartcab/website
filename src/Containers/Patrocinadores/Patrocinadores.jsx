import React from 'react'
import './patrocinadores.css';
import { Patro } from '../../Elements';
import { patro } from '../../data/patro.js';

const Patrocinadores = () => {
  return (
    <div className='website__patrocinadores section__padding' id='patrocinadores'>
        <h1 id="patrocinadores">Patrocinadores</h1>
        <br/>
        <p>
            Texto de porque los patrocinadores
        </p>
        <div className='website__patrocinadores-elements'>
          {patro.map((patro, index) => (
              <Patro key={index} patro={patro} />
          ))}
        </div>

    </div>
  )
}

export default Patrocinadores