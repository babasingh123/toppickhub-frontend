import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import HomePage component
import SubcategoryPage from './pages/SubcategoryPage'; // Import SubcategoryPage for item details

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for HomePage */}
          <Route path="/" element={<HomePage />} />

          {/* Route for SubcategoryPage, dynamic slug as URL parameter */}
          <Route path="/subcategory/:slug" element={<SubcategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
