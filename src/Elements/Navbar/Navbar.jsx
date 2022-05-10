import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Menu = () => (
    <>
      <p><a href='#el-club'>El Club</a></p>
      <p><a href='#historia'>Historia</a></p>
      <p><a href='#eventos'>Eventos</a></p>
      <p><a href='#proximoseventos'>Próximos Eventos</a></p>
      <p><a href='#patrocinadores'>Patrocinadores</a></p>
      <p><a href='#enlaces'>Enlaces</a></p>
      <p><a href='#contacto'>Contacto</a></p>
    </>
  )
  
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='website__navbar'>
      <div className='website__navbar-links'>
        <div className='website__navbar-links_logo'>
          <img src={logo} alt='logo' /*className='flip-horizontal-bottom'*//>
        </div>
        <div className='website__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='website__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='website__navbar-menu_container scale-up-center'>
            <div className='website_navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar