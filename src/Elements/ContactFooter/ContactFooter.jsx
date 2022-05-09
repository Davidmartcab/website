import React from 'react'
import './contactfooter.css'

const ContactFooter = (props) => {
  return (
    <a href= {props.cont[1]}>
        <div className='website__footer-contact-subelements'>
            <h2>{props.cont[0]}</h2>
            <p>{props.cont[2]}</p>
        </div>
    </a>
  )
}

export default ContactFooter