import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import AppWrap from '../../wrapper/AppWrap';
import './Skills.scss';
import { urlFor, client } from '../../client';

// const abouts = [
//   { title: 'Web Development', description: ' I am a good web developer', imgUrl: images.about01 },
//   { title: 'Web Design', description: 'I am a good web designer', imgUrl: images.about02 },
//   { title: 'UI/UX', description: 'I am a good web developer', imgUrl: images.about03 },
//   { title: 'Web Animations', description: 'I am a good web animator', imgUrl: images.about04 }
// ];

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);
 
  return (
    <>
      <h2 className="head-text"><span>Technologies</span> of expertise</h2>

      <div className="app__profiles">
        {skills.map((skill, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={skill.title + index}
          >
            <img src={urlFor(skill.imgUrl)} alt={skill.title} />

            <h2 className="bold-text" style={{ marginTop: 20 }}>{skill.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{skill.description}</p>
          </motion.div>
        ))};
      </div>
    </>
  );
};

// export default About
// export default AppWrap(About, 'about');
export default AppWrap(
  MotionWrap(Skill, 'app__skill'),
  'skills',
  // 'app__whitebg',
);