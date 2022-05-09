import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='website__header section__padding' id="home">
      <div className='website__header-content'>
        <h1 id="el-club">Salvamento Arganda</h1>
        <h2>¿Quienes somos?</h2>
        <p>
          Somos Salvamento Arganda, un club sin ánimo de lucro en el que ponemos en práctica la enseñanza del salvamento deportivo, llegando a competir a nivel territorial y nacional, y a su vez
          enseñamos y ayudamos a los alumnos a la preparación para la titulación en el salvamento profesional.<br/>
          Nos encontramos en la <strong>Ciudad Deportiva Principe Felípe</strong>, <strong>C/ San Sebastián, 6, 8</strong>, <strong>Arganda del Rey</strong>.<br/><br/>
          El club dispone de varios grupos, siendo estos:<br/><br/>
          <div>
            <strong>-Escuela Deportiva:</strong> Grupos de niños y niñas desde los 8 años hasta los 16, donde aprenderán técnicas de Salvamento y primeros auxilios, en un entorno ameno y divertido.
            Pudiendo participar en competiciones organizadas por el Ayuntamiento de Madrid, Comunidad de Madrid, Ayuntamiento de Arganda y el propio Club.
          </div>
          <br/>
          <div>
            <strong>-Deportistas Federados:</strong> Chicos y chicas desde los 16 años que reciben una preparación más específica para competir o para mejorar y perfeccionar técnicas.
          </div>
          <br/>
          <div>
            <strong>-Escuela Profesional:</strong> Ayudamos a los deportistas que quieren obtener el título de Socorrista a prepararse para afrontar las pruebas.
          </div>
        </p>
        <br/>
        <h2>Objetivos</h2>
        <p>
          Los objetivos del club es preparar a los nadadores para las competiciones, iniciación al salvamento deportivo y ayuda a la preparación del salvamento profesional.
        </p>
      </div>
    </div>
  )
}

export default Header