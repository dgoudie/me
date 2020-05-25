import React from 'react';
import styles from './ImageAndName.module.scss';

export default function ImageAndName(props: {
  name: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`${styles.root} ${!!props.className ? props.className : ''}`}
    >
      <div className={styles.image}>
        <div className={styles.dummyImageBlock} />
        <div
          className={styles.imageInner}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/daniel.jpg)`,
          }}
        ></div>
      </div>
      <h1 className={styles.name}>{props.name}</h1>
      <h2 className={styles.title}>{props.title}</h2>
    </div>
  );
}
