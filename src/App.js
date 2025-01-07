// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import HomePage component
import TopBar from './components/TopBar'; // Import Navbar component
import ItemCard from './components/ItemCard';
import SubcategoryCard from './components/SubcategoryCard';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <TopHeader />
        <Routes>
          {/* Route for HomePage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/subcategory/:slug" element={<SubcategoryCard />} />
          <Route path="/subcategoryItems/:slug" element={<ItemCard />} />
          {/* Future routes can be added here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
