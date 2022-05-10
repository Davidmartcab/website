import React from 'react'
import './enlaces.css';
import { Enlace } from '../../Elements';
import { enlaces } from '../../data/enlaces.js';

const Enlaces = () => {
  return (
    <div className='website__enlaces section__padding'>
        <h1 id="enlaces">Enlaces</h1>
        <br/>
        <div className='website__enlaces-elements'>
          {enlaces.map((enlace, index) => (
              <Enlace key={index} enlace={enlace} />
          ))}
        </div>

    </div>
  )
}

export default Enlaces