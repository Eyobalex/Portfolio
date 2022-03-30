import React from 'react'

import { Nabvar } from './components'
import { About, Footer, Header, Skills, Testimonial, Work } from './containers'
import './App.scss'


const App = () => {
  return (
    <div className='app'>

        <Nabvar />
        <Header />    
        <About />    
        <Work />    
        <Skills />    
        <Testimonial />    
        <Footer />    
    </div>
  )
}

export default App