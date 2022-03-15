import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebook, FaLinkedin,FaGithubSquare } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div> 
            <BsTwitter />
        </div>
        <div> 
            <BsInstagram />
        </div>
        <div> 
            <FaFacebook />
        </div>
        <div> 
          <FaLinkedin />
        </div>
        <div> 
          <FaGithubSquare />
        </div>

    </div>
  )
}

export default SocialMedia