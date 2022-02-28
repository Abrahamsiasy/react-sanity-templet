import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './About.scss'
import { images } from '../../constants'


const about = [
  {
    title: 'Web Devlopment',
    description: 'i am a good web devloper',
    imgUrl: images.about02
  },
  {
    title: 'Web Designer',
    description: 'i am a good web Designer',
    imgUrl: images.about01
  },
  {
    title: 'front end',
    description: 'i am a good front devloper',
    imgUrl: images.about03
  },
  {
    title: 'UI/ UX ',
    description: 'i am a good UI Designer',
    imgUrl: images.about04
  }
]

const About = () => {
  return (
    <>
      <h2 className='head-text'> I Know that <span>Good Devlopment </span> <br /> means <span>Good Busness</span> </h2>

      <div className='app__profiles'>
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >

            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={ {marginTop: 20}}> {about.title}</h2>
            <p className='text' style={ {marginTop: 20}}> {about.description}</p>

          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About