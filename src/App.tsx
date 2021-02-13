import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from 'views/home/Home';
import React from 'react';

export interface HomePageParams {
  stackItemId?: string;
}

function App() {
  return (
    <Router>
      <Route path="/:stackItemId?" exact component={Home} />
    </Router>
  );
}

export default App;
