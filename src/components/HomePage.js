// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard'; // Import the CategoryCard component
import Api from '../services/api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../HomePage.css';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await Api.getCategories();
        setCategories(data); // Ensure the API returns { categories: [...] }
      } catch (error) {
        setError('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container>
      <h2 className="mb-4 text-center">Explore Our Top Categories</h2>

      {loading && <div className="text-center">Loading categories...</div>}
      {error && <div style={{ color: 'red' }} className="mb-4 text-center">{error}</div>}

      <Row className="category-cards">
        {categories.map(category => (
          <Col key={category.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
            <CategoryCard category={category} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
