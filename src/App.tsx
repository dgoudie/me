import 'react-photoswipe/lib/photoswipe.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from 'views/home/Home';
import { PhotoSwipe } from 'react-photoswipe';
import React from 'react';

export type PhotoSwipeContextType = {
  items: PhotoSwipe.Item[] | null;
  onClose: () => void;
};

export const PhotoSwipeContext = React.createContext<PhotoSwipeContextType>({
  items: null,
  onClose: () => null,
});

export interface HomePageParams {
  stackItemId?: string;
}

function App() {
  const context: PhotoSwipeContextType = {
    items: null,
    onClose: () => null,
  };
  return (
    <PhotoSwipeContext.Provider value={context}>
      <Router>
        <Route path="/:stackItemId?" exact component={Home} />
      </Router>
      <PhotoSwipeContext.Consumer>
        {({ items, onClose }) => (
          <PhotoSwipe
            items={items ?? []}
            onClose={onClose}
            isOpen={!!items?.length}
          />
        )}
      </PhotoSwipeContext.Consumer>
    </PhotoSwipeContext.Provider>
  );
}

export default App;
