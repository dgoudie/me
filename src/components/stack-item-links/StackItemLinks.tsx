import React from 'react';
import { WebsiteStackItemInfoLink } from '@dgoudie/me-types';
import styles from './StackItemLinks.module.scss';

interface Props {
  links: WebsiteStackItemInfoLink[];
}

export default function StackItemLinks({ links }: Props) {
  return (
    <div className={styles.root}>
      {links.map((link) => (
        <a
          key={link.href}
          className={styles.link}
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
