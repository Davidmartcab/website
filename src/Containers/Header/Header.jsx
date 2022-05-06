import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='website__header section__padding' id="home">
      <div className='website__header-content'>
        <h1 id="el-club">Salvamento Arganda</h1>
        <h2>¿Quienes somos?</h2>
        <p>
          Somos Salvamento Arganda, un club sin ánimo de lucro en el que ponemos en práctica la enseñanza del salvamento deportivo, llegando a competir a nivel territorial y nacional, y a su vez enseñamos y ayudamos a los alumnos a la preparación para la titulación en el salvamento profesional.<br></br>
          El club dispone de varios grupos, siendo estos:<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;-Escuela lúdica para los niños.<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;-Grupo federados, en el que preparamos más especializado en competiciones.<br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;-Grupo de master, que son para adultos mayores de 30 años que busquen hacer un deporte completo y motivación hacia las competiciones.
        </p>
        <br />
        <h2>Objetivos</h2>
        <p>
          Los objetivos del club es preparar a los nadadores para las competiciones, iniciación al salvamento deportivo y ayuda a la preparación del salvamento profesional.
        </p>
      </div>
    </div>
  )
}

export default Header