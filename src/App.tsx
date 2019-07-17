import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'views/home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
