import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

// Secondary circles
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  // <div id= "home" className="app__header app__flex">
  <div className="app__header app__flex">

    <motion.div
    // Pop message top left
      className="app__header-info"
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.9 }}
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 0 }}>
            <p className="p-text2">Hi, my name is:</p>
            <h1 className="head-text2">Fernando Olivo</h1>
            <p className="p-text2">I'm a front-end developer from Caracas, VE (GMT-4).</p>
            <p className="p-text2">I build interactive and responsive websites with great user experience.</p>
          </div>
        </div>

        {/* <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div> */}
      </div>
    </motion.div>

    {/* <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div> */}

    {/* <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div> */}
  </div>
);


export default AppWrap(Header, 'home');
// export default Header;