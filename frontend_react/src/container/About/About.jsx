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
    <div >
      <h2 className="head-text"><span>About me</span></h2>

      <div className="app__about">


        <div className="app__about-profile">
          {about.map((about, index) => (
          
            <div
              className="app__about-item"
              key={about.title + index}
            >
              <div>
                <img src={urlFor(about.profileImg)} alt={about.title} />
              </div>
              <div 
              className="app__about-desc"
              >
              <p 
                className="p-text5" 
                style={{ marginTop: 10 }}
              >
                {about.description}
                <br/><br/>
                {about.description2}
                <br/><br/>
                {about.description3}
              </p>

              </div>
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