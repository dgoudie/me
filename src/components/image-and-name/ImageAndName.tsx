import { Info } from '@dgoudie/me-types';
import classNames from 'classnames';
import React from 'react';
import styles from './ImageAndName.module.scss';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  info: Info;
};

const ImageAndName = React.forwardRef<HTMLDivElement, Props>(
  ({ info, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={classNames(props.className, styles.root)}
      >
        <div className={styles.image}>
          <div className={styles.dummyImageBlock} />
          <div
            className={styles.imageInner}
            style={{
              backgroundImage: `url(${info.imageUrl})`,
            }}
          ></div>
        </div>
        <h1 className={styles.name}>{info.name}</h1>
        <h2 className={styles.title}>{info.title}</h2>
      </div>
    );
  }
);

export default ImageAndName;
