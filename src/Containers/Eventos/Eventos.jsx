import React from 'react'
import './eventos.css';

const eventos = [
    {nombre: '1º Jornada Liga Nacional', 
    fecha: '27 - 28 de noviembre',
    lugar : 'Piscina Municipal Valdesanchuela, Valdemoro'},
    {nombre: '1º Jornada Liga Nacional', 
    fecha: '27 - 28 de noviembre',
    lugar : 'Piscina Municipal Valdesanchuela, Valdemoro'},
    {nombre: '1º Jornada Liga Nacional', 
    fecha: '27 - 28 de noviembre',
    lugar : 'Piscina Municipal Valdesanchuela, Valdemoro'},
    {nombre: '1º Jornada Liga Nacional', 
    fecha: '27 - 28 de noviembre',
    lugar : 'Piscina Municipal Valdesanchuela, Valdemoro'},
]

const ProximosEventos = [
    {nombre: '4º Jornada de liga nacional', 
    fecha: '24 - 25 de abril',
    lugar : 'Polideportivo Príncipe Felipe, Arganda del Rey'},
    {nombre: '4º Jornada de liga nacional', 
    fecha: '24 - 25 de abril',
    lugar : 'Polideportivo Príncipe Felipe, Arganda del Rey'},
    {nombre: '4º Jornada de liga nacional', 
    fecha: '24 - 25 de abril',
    lugar : 'Polideportivo Príncipe Felipe, Arganda del Rey'},
]

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
            {ProximosEventos.map((evento, index) => (
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