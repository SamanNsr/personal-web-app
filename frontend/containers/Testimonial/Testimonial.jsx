import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { SanityImage } from '../../components';

import styles from './Testimonial.module.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const testimonialsQuery = `*[_type == "testimonials"]`;
    const brandsQuery = `*[_type == "brands"]`;

    client.fetch(testimonialsQuery).then((data) => {
      console.log('testimonials', data);
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const testi = testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className={cn(styles['app__testimonial-item'], 'app__flex')}>
            <SanityImage
              className={cn(styles['app__testimonial-item-img'])}
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
              }}
              sanityImage={testi.imgurl}
              alt="testimonial"
            />
            <div className={cn(styles['app__testimonial-content'])}>
              <p className={cn('p-text')}>{testi.feedback}</p>
              <div>
                <h4 className={cn('bold-text')}>{testi.name}</h4>
                <h5 className={cn('p-text')}>{testi.company}</h5>
              </div>
            </div>
          </div>

          <div className={cn(styles['app__testimonial-btns'], 'app__flex')}>
            <div
              className={cn('app__flex')}
              onClick={() =>
                handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className={cn('app__flex')}
              onClick={() =>
                handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className={cn(styles['app__testimonial-brands'], 'app__flex')}>
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <SanityImage
              className={cn(styles['app__testimonial-brand-img'])}
              sanityImage={brand.imgUrl}
              style={{
                objectFit: 'cover',
              }}
              alt={brand.name}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, cn(styles['app__testimonial'])),
  'testimonial',
  cn('app__primarybg'),
);
