import React from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';

import styles from './Header.module.scss';
import { images } from '../../constants';
import { StyledImage } from '../../components';

const Header = () => {
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
  return (
    <div className={cn(styles['app__header'], styles['app__home'], 'app__flex')}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={cn(styles['app__header-info'])}
      >
        <div className={cn(styles['app__header-badge'])}>
          <div className={cn(styles['badge-cmp'], 'app__flex')}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className={cn('p-text')}>Hello, I am just a simple</p>
              <h1 className={cn('head-text')}>Saman</h1>
            </div>
          </div>

          <div className={cn(styles['tag-cmp'], 'app__flex')}>
            <p className={cn('p-text')}>Software Developer</p>
            <p className={cn('p-text')}>And Code Warrior</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={cn(styles['app__header-img'])}
      >
        <StyledImage
          className={cn(styles['header-img'])}
          src={images.profile}
          alt="profile_bg"
        />

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className={cn(styles['overlay_circle'])}
        >
          <StyledImage src={images.circle} alt="profile_circle" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={cn(styles['app__header-circles'])}
      >
        {[images.react, images.nodejs, images.golang].map((img, index) => (
          <div className={cn(styles['circle-cmp'], 'app__flex')} key={`circle-${index}`}>
            <StyledImage className={cn(styles['circle-img'])} src={img} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
