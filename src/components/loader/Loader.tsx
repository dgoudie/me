import React from 'react';
import classnames from 'classnames';
import styles from './Loader.module.scss';

interface Props {
  className?: string;
}

export default function Loader({ className }: Props) {
  return (
    <div className={classnames(styles.root, className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
