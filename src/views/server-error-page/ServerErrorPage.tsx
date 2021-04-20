import { ApolloError } from '@apollo/client';
import { ErrorContext } from 'App';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import styles from './ServerErrorPage.module.scss';

export default function ServerErrorPage() {
  const { error } = useContext(ErrorContext);
  if (!error) {
    return <Redirect to="/" />;
  }
  return (
    <div className={classNames(styles.root)}>
      <h1>
        <i className="fas fa-exclamation-triangle" />
        500
      </h1>
      <h2>An unexpected error occurred.</h2>
      <h2>
        If my monitoring alerted me, I should be aware of this. Please check
        back later.
      </h2>
      <h3>
        {error instanceof ApolloError
          ? error.networkError?.message
          : error.message}
      </h3>
    </div>
  );
}
