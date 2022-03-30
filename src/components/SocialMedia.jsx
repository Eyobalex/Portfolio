import React from 'react'

import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


const AppWrap= () => {
  return (
    <div className='app__social'>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  )
}

export default AppWrap