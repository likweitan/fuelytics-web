// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* Add your other routes here */}
        <Route path="/" element={<Home />} /> {/* Your home component */}
      </Routes>
    </Router>
  );
};

export default App;