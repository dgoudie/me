import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from 'views/home/Home';
import React, { useState } from 'react';
import ServerErrorPage from 'views/server-error-page/ServerErrorPage';
import { ApolloError } from '@apollo/client';

export interface HomePageParams {
  stackItemId?: string;
}

type ErrorContextType = {
  error: ApolloError | Error;
  setError: (error: Error) => void;
};

export const ErrorContext = React.createContext<ErrorContextType>({
  error: new Error('default error'),
  setError: () => null,
});

function App() {
  const [error, setError] = useState(new Error('default error'));
  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <Router>
        <Switch>
          <Route path="/error" exact component={ServerErrorPage} />
          <Route path="/:stackItemId?" exact component={Home} />
        </Switch>
      </Router>
    </ErrorContext.Provider>
  );
}

export default App;
