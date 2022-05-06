import React from 'react'

import { Navbar } from './Elements';
import { Footer, Header, Historia, Eventos } from './Containers';
import './app.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <Header />
      <Historia />
      <Eventos />
      <Footer />
    </div>
  )
}

export default App