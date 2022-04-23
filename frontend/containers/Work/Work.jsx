import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { SanityImage } from '../../components';

import styles from './Work.module.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filteredWork, setFilteredWork] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    //  const query = `*[_type == "work" && category == "${activeFilter}"]`;
    const query = `*[_type == "works"]`;
    const tagsQuery = `*[_type == "workTags"]`;
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilteredWork(data);
    });
    client.fetch(tagsQuery).then((data) => {
      const allTags = data.map((tag) => tag.name);
      if (allTags.length === 0) {
        allTags.push('All');
      }
      setTags(allTags);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);

    if (item == 'All') {
      setFilteredWork(works);
    } else {
      setFilteredWork(works.filter((work) => work.tags.includes(item)));
    }
  };
  return (
    <>
      <h2 className={cn('head-text')}>
        My Awesome<span> Projects</span> Section
      </h2>

      <div className={cn(styles['app__work-filter'])}>
        {tags.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={cn(styles['app__work-filter-item'], 'app__flex', 'p-text', {
              [styles['item-active']]: activeFilter === item,
            })}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={cn(styles['app__work-portfolio'])}
      >
        {filteredWork.map((work, index) => (
          <div className={cn(styles['app__work-item'], 'app__flex')} key={index}>
            <div className={cn(styles['app__work-frame'], 'app__flex')}>
              <SanityImage
                className={cn(styles['app__work-img'])}
                sanityImage={work.imgUrl}
                alt={work.name}
                style={{ borderRadius: '0.5rem', objectFit: 'cover' }}
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className={cn(styles['app__work-hover'], 'app__flex')}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className={cn('app__flex')}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className={cn('app__flex')}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className={cn(styles['app__work-content'], 'app__flex')}>
              <h4 className={cn('bold-text')}>{work.title}</h4>
              <p className={cn('p-text')} style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className={cn(styles['app__work-tag'], 'app__flex')}>
                <p className={cn('p-text')}>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, cn(styles['app__works'])),
  'work',
  cn('app__primarybg'),
);
