import { useNextSanityImage } from 'next-sanity-image';
import { client } from '../../client';
import Image from 'next/image';
import { images } from '../../constants';

const SanityImage = ({ sanityImage, className, ...props }) => {
  let src;
  if (!sanityImage) src = images.noImage;
  const imageProps = useNextSanityImage(client, sanityImage);

  return (
    <div className={className}>
      {!src && <Image {...imageProps} {...props} />}
      {src && <Image src={src} alt={props.alt} {...props} />}
    </div>
  );
};

export default SanityImage;
