import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './reset.css';

import HomePage from './containers/HomePage';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
