// SubcategoriesPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SubcategoryCard from '../components/SubcategoryCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SubcategoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || {};

  if (!category) {
    return <div>Error: No category data available.</div>;
  }

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Container>
      <Button variant="secondary" className="my-4" onClick={handleBack}>
        &larr; Back to Categories
      </Button>
      <h1 className="my-4 text-center">Subcategories of {category.name}</h1>
      <Row className="subcategory-cards">
        {category.subcategories && category.subcategories.length > 0 ? (
          category.subcategories.map(subcategory => (
            <Col key={subcategory.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
              <SubcategoryCard subcategory={subcategory} />
            </Col>
          ))
        ) : (
          <p>No subcategories available.</p>
        )}
      </Row>
    </Container>
  );
};

export default SubcategoriesPage;
