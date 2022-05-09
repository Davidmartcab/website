import React from 'react'
import './eventos.css';
import { eventos } from '../../data/eventos.js';
import { proximoseventos } from '../../data/proximoseventos.js';
import { Event } from '../../Elements';


const Eventos = () => {
  return (
    <div className='website__eventos section__padding'>
        <h1 id="eventos">Eventos</h1>

        <div className='website__eventos-contentiner'>
            {eventos.map((event, index) => <Event evento={event} key={index} />
            )}
        </div>
        <h1 id='proximoseventos'>Próximos Eventos</h1>
        <div className='website__eventos-contentiner'>
            {proximoseventos.map((proEvent, index) => <Event evento={proEvent} key={index} />)}
        </div>
        
        
    </div>
  )
}

export default Eventos