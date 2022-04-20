import React from 'react';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import cn from 'classnames';

import styles from './SocialMedia.module.scss';

function SocialMedia() {
  return (
    <div className={cn(styles['app__social'])}>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsLinkedin />
      </div>
    </div>
  );
}

export default SocialMedia;
