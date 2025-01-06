import React, { useState, useEffect } from 'react';
import SubcategoryCard from './SubcategoryCard'; // Import the SubcategoryCard component
import Api from '../services/api';  // Import the API class

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  // Fetch categories using the API class
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await Api.getCategories();
        setCategories(data);  // Set categories data
      } catch (error) {
        setError('Failed to load categories');  // Set error state if API fails
      }
    };

    fetchCategories(); // Fetch categories when the component is mounted
  }, []);

  return (
    <div>
      <h1>Welcome to TopPickHub</h1>
      <h2>Explore Our Top Categories</h2>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <div className="category-cards">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <div>
              {category.subcategories.map(subcategory => (
                <SubcategoryCard key={subcategory.id} subcategory={subcategory} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
