import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import styles from './Navbar.module.scss';
import { useToggleState } from '../../hooks';

const Navbar = () => {
  const [toggle, setToggle] = useToggleState();
  return (
    <nav className={cn(styles['app__navbar'])}>
      <div className={cn(styles['app__navbar-logo'])}>
        <div className={cn(styles['app__navbar-logo-img'])}>
          <Image src={images.logo} alt="logo" />
        </div>
      </div>

      <ul className={cn(styles['app__navbar-links'])}>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => {
          return (
            <li className={cn('app__flex', 'p-text')} key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>

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
