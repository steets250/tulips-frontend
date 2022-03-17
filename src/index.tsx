import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './reset.less';
import './index.less';

import AboutPage from './containers/AboutPage';
import HomePage from './containers/HomePage';
import ReportPage from './containers/ReportPage';
import ResourcesPage from './containers/ResourcesPage';
import TermsPage from './containers/TermsPage';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
