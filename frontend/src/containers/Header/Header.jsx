import { motion } from 'framer-motion'
import React from 'react'
import './Header.scss'
import { images } from '../../constants'


const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className='app__header app__flex' id='home'>
      <motion.div
        className='app__header-info'
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2.5 }}
      >

        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginleft: 20 }}>
              <p className='p-text'>hello i am </p>
              <h1 className='head-text'>Kalab</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web devloper </p>
            <p className='p-text'>freelancer</p>
          </div>
        </div>

      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='overlay_circle'
          src={images.circle}
          alt='profile circle'
        />
      </motion.div>


      <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className='app__header-circles'

      >
        {
          [images.flutter, images.redux, images.sass].map((circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
              <img src={circle} alt='circle' />

            </div>
          ))
        }

      </motion.div>
    </div>
  )
}

export default Header