// src/App.js
import React from 'react';
import ImageCarousel from './component/ImageCarousel';
import TooltipImplementation from './component/TooltipImplementation';

import TabbedContent from './component/TabbedContent';
import './App.css'; // Optional: for additional styling

const App = () => {
  return (
    <div className="App">
      <ImageCarousel />
      <TooltipImplementation />
      <TabbedContent />
    </div>
  );
};

export default App;
