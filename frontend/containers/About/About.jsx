import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import styles from './About.module.scss';
import { StyledImage } from '../../components';
import { images } from '../../constants';

const abouts = [
  {
    title: 'Backend',
    description:
      "I'm a backend developer with a passion for building scalable and maintainable applications.",
    imageUrl: images.nodejs,
  },
  {
    title: 'Frontend',
    description:
      "I'm a frontend developer with a passion for building beautiful and functional user interfaces.",
    imageUrl: images.react,
  },
];
const About = () => {
  return (
    <div className={cn(styles['app__about'])}>
      <h2 className={cn('head-text')}>
        I now that<span> Good Devs</span>
        <br /> means<span> Good Business</span>
      </h2>

      <div className={cn(styles['app__profiles'])}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className={cn(styles['app__profile-item'])}
            key={about.title + index}
          >
            <StyledImage
              className={cn(styles['app__profile-item-img'])}
              src={about.imageUrl}
              alt={about.title}
            />
            <h2 className={cn('bold-text')} style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className={cn('p-text')} style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
