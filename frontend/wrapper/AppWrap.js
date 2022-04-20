import React from 'react';
import cn from 'classnames';
import { SocialMedia, NavigationDots } from '../components';

import styles from '../styles/Home.module.scss';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={cn('app__container', classNames)}>
        <SocialMedia />

        <div className={cn('app__wrapper', 'app__flex')}>
          <Component />

          <div className={cn(styles['copyright'])}>
            <p className={cn('p-text')}>© 2022 Saman</p>
            <p className={cn('p-text')}>All rights reserved.</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
