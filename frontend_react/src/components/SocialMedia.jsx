import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://github.com/fjolivo/" target="_blank">
      <FaGithub />
    </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/fjolivo/" target="_blank">
        <FaLinkedin />
    </a>
    </div>
    <div>
    <a href="https://www.instagram.com/fjolivo/" target="_blank">
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;