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
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route path="/pet-details-not-found" element={<PetDetailsNotFound />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path=":type" element={<HomePage />} >
            <Route path=":id" element={<PetDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
