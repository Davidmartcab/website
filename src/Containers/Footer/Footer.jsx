import React from 'react'
import ContactFooter from '../../Elements/ContactFooter/ContactFooter';
import './footer.css';

const contactData = [
  ['Correo', 'mailto:clubsalvamentoarganda@gmail.com', 'clubsalvamentoarganda@gmail.com'],
  ['Instagram', 'https://www.instagram.com/clubsalvamentoarganda', 'Clubsalvamentoarganda'],
  ['Facebook', 'https://www.facebook.com/salvamento.arganda.1', 'SalvamentoArganda1'],
  ['Twitter', 'https://twitter.com/salvamentoarganda', 'SalvamentoArg']
]



const Footer = () => {

  return (
    <div className='website__footer section__padding'>
      <div className='website__footer-contact'>
        <h1 aling="center" id="contacto">Contato</h1>
        <div className='website__footer-contact-elements'>

          {contactData.map((cont, index) => (
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