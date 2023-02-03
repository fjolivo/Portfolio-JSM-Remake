import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import { urlFor, client } from '../../client';
import './About.scss';

const About = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);
 
  return (
    <div>
      <h2 className="head-text"><span>About me</span></h2>

      <div className="app__profiles">


        <div className="app__profiles">
          {about.map((about, index) => (
          
            <div
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.profileImg)} alt={about.title} />
            </div>
          ))};
        </div>


        <div className="app__profiles">
          {about.map((about, index) => (
          
            <div
              className="app__profile-item"
              key={about.title + index}
            >
              {/* <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2> */}
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </div>
          ))};
        </div>
      </div>



    </div>
  );


  return (
    <div>About</div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
);