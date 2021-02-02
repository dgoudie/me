import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './index.scss';

import * as serviceWorker from './serviceWorker';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API,
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById(`root`)
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
