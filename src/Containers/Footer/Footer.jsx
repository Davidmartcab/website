import React from 'react'
import ContactFooter from '../../Elements/ContactFooter/ContactFooter';
import './footer.css';
import { contacto } from '../../data/contacto.js';



const Footer = () => {

  return (
    <div className='website__footer section__padding'>
      <div className='website__footer-contact'>
        <h1 aling="center" id="contacto">Contacto</h1>
        <div className='website__footer-contact-elements'>

          {contacto.map((cont, index) => (
                      <ContactFooter key={index} cont={cont} />
              )
            )
          }

        </div>
      </div>
    </div>
  )
}

export default Footer