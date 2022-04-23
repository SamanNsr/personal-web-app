import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { PulseLoader } from 'react-spinners';

import { AppWrap, MotionWrap } from '../../wrapper';
import { StyledImage } from '../../components';
import { images } from '../../constants';
import { client } from '../../client';

import styles from './Footer.module.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className={cn('head-text')}>Take a coffee & chat with me</h2>
      <div className={cn(styles['app__footer-cards'])}>
        <div className={cn(styles['app__footer-card'])}>
          <StyledImage
            className={cn(styles['app__footer-card-img'])}
            src={images.email}
            alt="email"
          />
          <a href="mailto:1999saman@gmail.com" className="p-text">
            1999saman@gmail.com
          </a>
        </div>
        <div className={cn(styles['app__footer-card'])}>
          <StyledImage
            className={cn(styles['app__footer-card-img'])}
            src={images.mobile}
            alt="mobile"
          />
          <a href="tel: +98 (910) 100-33-80" className="p-text">
            +98 (910) 100-33-80
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className={cn(styles['app__footer-form'], 'app__flex')}>
          <div className={cn('app__flex')}>
            <input
              className={cn('p-text')}
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className={cn('app__flex')}>
            <input
              className={cn('p-text')}
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className={cn('p-text')}
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className={cn('p-text')} onClick={handleSubmit}>
            {loading ? <PulseLoader size={10} color={'#fff'} /> : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className={cn('head-text')}>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, cn(styles['app__footer'])),
  'contact',
  cn('app__whitebg'),
);
