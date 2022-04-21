import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import styles from './About.module.scss';
import { client } from '../../client';
import { SanityImage } from '../../components';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
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
            <SanityImage
              className={cn(styles['app__profile-item-img'])}
              sanityImage={about.imgUrl}
              alt={about.title}
              style={{ borderRadius: '15px' }}
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
    </>
  );
};

export default AppWrap(
  MotionWrap(About, cn(styles['app__about'])),
  'about',
  cn('app__whitebg'),
);
