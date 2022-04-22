import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { SanityImage } from '../../components';

import styles from './Skills.module.scss';

import './Skills.module.scss';

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    //  const query = `*[_type == "work" && category == "${activeFilter}"]`;
    const query = `*[_type == "experiences"]`;
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(query).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className={cn('head-text')}>Skills & Experience</h2>
      <div className={cn(styles['app__skills-container'])}>
        <motion.div className={cn(styles['app__skills-list'])}>
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className={cn(styles['app__skills-item'], 'app__flex')}
              key={skill.name + index}
            >
              <div className={cn('app__flex')} style={{ backgroundColor: skill.bgColor }}>
                <SanityImage
                  sanityImage={skill.icon}
                  alt={skill.name}
                  className={cn(styles['app__skills-item-icon'])}
                />
              </div>
              <p className={cn('p-text')}>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={cn(styles['app__skills-exp'])}>
          {experience?.map((exp, index) => (
            <motion.div className={cn(styles['app__skills-exp-item'])} key={index + exp.year}>
              <div className={cn(styles['app__skills-exp-year'])}>
                <p className={cn('bold-text')}>{exp.year}</p>
              </div>

              <motion.div className={cn(styles['app__skills-exp-works'])}>
                {exp.works?.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className={cn(styles['app__skills-exp-work'])}
                      data-tip
                      data-for={work.name}
                      key={work.name + index}
                    >
                      <h4 className={cn('h4-text')}>{work.name}</h4>
                      <p className={cn('p-text')}>{work.company}</p>
                    </motion.div>

                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className={cn(styles['skills-tooltip'])}
                      key={work.name + index}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, cn(styles['app__skills'])),
  'skills',
  cn('app__whitebg'),
);
