import { ApolloError } from '@apollo/client';
import React from 'react';
import styles from './ServerErrorPage.module.scss';

export default function ServerErrorPage({ error }: { error?: ApolloError }) {
  return (
    <div className={styles.root}>
      <h1>
        <i className="fas fa-exclamation-triangle" />
        500
      </h1>
      <h2>An unexpected error occurred.</h2>
      <h2>
        If my monitoring alerted me, I should be aware of this. Please check
        back later.
      </h2>
      <h3>{error?.networkError?.message}</h3>
    </div>
  );
}
