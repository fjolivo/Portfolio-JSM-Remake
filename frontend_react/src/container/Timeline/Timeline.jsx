import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { AppWrap, MotionWrap } from '../../wrapper';
// import { AppWrap } from '../../wrapper';

import { urlFor, client } from '../../client';
import './Timeline.scss';



const Timeline = () => {
  const [experiences, setExperiences] = useState([]);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const timelineQuery = '*[_type == "timeline"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(timelineQuery).then((data) => {
      setTimeline(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Timeline</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {timeline.map((timeline) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={timeline.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: timeline.bgColor }}
              >
                <img src={urlFor(timeline.icon)} alt={timeline.name} />
              </div>
              <p className="p-text">{timeline.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  
                  <>

                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                       data-tooltip-content={work.desc}
                      id="custom-inline-styles" 
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <Tooltip
                      anchorId="custom-inline-styles"
                      // id={work.name}
                      // effect="solid"
                      // arrowColor="#000"
                      className="skills-tooltip"
                      // content={work.desc}
                    >
                    </Tooltip>
                                      
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

// export default AppWrap(Skills, 'skills')
export default AppWrap(
  MotionWrap(Timeline, 'app__skills'),
  'skills',
  'app__whitebg',
);