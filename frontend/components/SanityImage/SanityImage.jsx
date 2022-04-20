import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../../client';
import Image from 'next/image';

const SanityImage = ({ sanityImage, className, ...props }) => {
  const imageProps = useNextSanityImage(client, sanityImage);

  return (
    <div className={className}>
      <Image {...imageProps} {...props} />
    </div>
  );
};

export default SanityImage;
