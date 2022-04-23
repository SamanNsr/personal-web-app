import React from 'react';
import cn from 'classnames';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import styles from './Navbar.module.scss';
import { useToggleState } from '../../hooks';
import StyledImage from '../StyledImage/StyledImage';

const Navbar = () => {
  const [toggle, setToggle] = useToggleState();
  return (
    <nav className={cn(styles['app__navbar'])}>
      <div className={cn(styles['app__navbar-logo'])}>
        <StyledImage
          className={cn(styles['app__navbar-logo-img'])}
          src={images.logo}
          alt="logo"
        />
      </div>

      <ul className={cn(styles['app__navbar-links'])}>
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item) => {
          return (
            <li className={cn('app__flex', 'p-text')} key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>

      {/* Small screen burger menu */}
      <div className={cn(styles['app__navbar-menu'])}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => {
                return (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
