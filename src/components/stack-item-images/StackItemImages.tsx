import { WebsiteStackItemInfoImage } from '@dgoudie/me-types';
import React from 'react';
import styles from './StackItemImages.module.scss';
interface Props {
  images: WebsiteStackItemInfoImage[];
}
export default function StackItemImages({ images }: Props) {
  return (
    <React.Fragment>
      {images.map((image) => (
        <figure className={styles.figure} key={image.url}>
          <div>
            <img src={image.url} alt={image.title} />
          </div>
          {!!image.title && <figcaption>{image.title}</figcaption>}
        </figure>
      ))}
    </React.Fragment>
  );
}
