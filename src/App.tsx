import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default App;
