import React from 'react';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/home/:type" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
