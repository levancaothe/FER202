import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { renderRoutes } from './routes';
import NavigationMenu from './NavigationMenu';

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <NavigationMenu />
        <Routes>
          {renderRoutes()}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
