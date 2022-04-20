import React from 'react';
import Image from 'next/image';
import { images } from '../../constants';

const StyledImage = ({ src, alt, className, ...props }) => {
  return (
    <div className={className}>
      <Image src={src || images.noImage} alt={alt} />
    </div>
  );
};

export default StyledImage;
