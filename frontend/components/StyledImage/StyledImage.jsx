import React from 'react';
import Image from 'next/image';

const StyledImage = ({ src, alt, className, ...props }) => {
  return (
    <div className={className}>
      <Image src={src} alt={alt} />
    </div>
  );
};

export default StyledImage;
