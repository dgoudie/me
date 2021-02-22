import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.scss';

import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import styles from './StackItemImageCarousel.module.scss';

interface Props {
  imageUrls: string[];
}

export default function StackItemImageCarousel({ imageUrls }: Props) {
  return (
    <div className={styles.container}>
      <Carousel
        renderIndicator={() => null}
        className={styles.carousel}
        autoPlay={false}
      >
        {imageUrls.map((url) => (
          <img className={styles.carouselImage} src={url} alt="" key={url} />
        ))}
      </Carousel>
    </div>
  );
}
