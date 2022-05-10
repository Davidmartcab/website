import React, { useState,  useEffect, useRef } from 'react'
import './event.css';

const Event = (props) => {

  const ref = useRef()
  const [toggleEvent, setToggleEvent] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (toggleEvent && ref.current && !ref.current.contains(e.target)) {
        setToggleEvent(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [toggleEvent])

  const EventPlus = () => (
    <>
      <div className='website__events-resultados scale-up-center2' ref={ref}>
        <h2>Resultados:</h2>
        <div className='website__events-resultados-grid'>
            {props.evento.resultados.map((result, index) => (
              <div className='website__events-resultados-person'>
                {result.insta.length === 0 ? <h3>{result.nombre}</h3> : <a href={'https://www.instagram.com/'+result.insta+'/'}><h3 className='insta'>{result.nombre}</h3></a>}
                <p>{result.categoria}</p>
                {result.pruebas.map((prueba, index2) => (
                    <p>-{prueba.nombre}: {prueba.tiempo}</p>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  )

  const Proximamente= () => (
    <>
      <div className='website__events-resultados scale-up-center2' ref={ref}>
        <h2>Próximamente</h2>
      </div>
    </>
  )

  return (
    <div>
        <div className='website__eventos-contentiner-evento'
          onClick={() => {setToggleEvent(true)}}
          >
            <h2>{props.evento.nombre}</h2>
            <p><strong>Fecha:</strong> {props.evento.fecha}</p>
            <p><strong>Lugar:</strong> {props.evento.lugar}</p>
            {toggleEvent && props.evento.resultados.length > 0 && (
                  <EventPlus />
            )}
            {toggleEvent && props.evento.resultados.length === 0 && (
                  <Proximamente />
            )}
        </div>
    </div>
  )
}

export default Event