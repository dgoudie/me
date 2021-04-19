import React from 'react';
import { WebsiteStackItemInfoLink } from '@dgoudie/me-types';
import styles from './StackItemLinks.module.scss';
import classNames from 'classnames';

interface Props {
  links: WebsiteStackItemInfoLink[];
  linkTheme?: 'light' | 'dark';
}

export default function StackItemLinks({ links, linkTheme }: Props) {
  return (
    <div className={styles.root}>
      {links.map((link) => (
        <a
          key={link.href}
          className={classNames(styles.link, !!linkTheme && styles[linkTheme])}
          rel="noreferrer noopener"
          target="_blank"
          href={link.href}
        >
          <i className="fas fa-external-link-alt" />
          <span>{link.text}</span>
        </a>
      ))}
    </div>
  );
}
