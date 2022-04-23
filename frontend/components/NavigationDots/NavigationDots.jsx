import React from 'react';
import cn from 'classnames';

import styles from './NavigationDots.module.scss';

const NavigationDots = ({ active }) => {
  return (
    <div className={cn(styles['app__navigation'])}>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => {
        return (
          <a
            href={`#${item}`}
            key={item + index}
            className={cn(styles['app__navigation-dot'])}
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
          ></a>
        );
      })}
    </div>
  );
};

export default NavigationDots;
