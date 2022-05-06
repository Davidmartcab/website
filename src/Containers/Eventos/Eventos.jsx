import React from 'react'
import './eventos.css';
import { eventos } from '../../data/eventos.js';
import { proximoseventos } from '../../data/proximoseventos.js';


const Eventos = () => {
  return (
    <div className='website__eventos section__padding'>
        <h1 id="eventos">Eventos</h1>

        <div className='website__eventos-contentiner'>
            {eventos.map((evento, index) => (
                <div className='website__eventos-contentiner-evento'>
                    <h2>{evento.nombre}</h2>
                    <p><c>Fecha:</c> {evento.fecha}</p>
                    <p><c>Lugar:</c> {evento.lugar}</p>
                </div>
            ))}
        </div>
        <h1 id='proximoseventos'>Próximos Eventos</h1>
        <div className='website__eventos-contentiner'>
            {proximoseventos.map((evento, index) => (
                <div className='website__eventos-contentiner-evento'>
                    <h2>{evento.nombre}</h2>
                    <p><c>Fecha:</c> {evento.fecha}</p>
                    <p><c>Lugar:</c> {evento.lugar}</p>
                </div>
            ))}
        </div>
        
        
    </div>
  )
}

export default Eventos