import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.scss';

import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import { WebsiteStackItemInfoImage } from '@dgoudie/me-types';
import styles from './StackItemImageCarousel.module.scss';

interface Props {
  images: WebsiteStackItemInfoImage[];
}

export default function StackItemImageCarousel({ images }: Props) {
  return (
    <div className={styles.container}>
      <Carousel
        renderIndicator={() => null}
        className={styles.carousel}
        autoPlay={false}
      >
        {images.map((image) => (
          <img
            className={styles.carouselImage}
            src={image.url}
            alt={image.title}
            key={image.url}
          />
        ))}
      </Carousel>
    </div>
  );
}
