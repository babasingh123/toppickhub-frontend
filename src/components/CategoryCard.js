// src/components/CategoryCard.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; // For navigation if needed


const CategoryCard = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSubcategories = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <Card className="h-100 w-100 d-flex flex-column">
      {category.image && (
        <Card.Img
          variant="top"
          src={category.image}
          alt={category.name}
          className="category-image"
        />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{category.name}</Card.Title>
        <Card.Text className="flex-grow-1">
          {category.description}
        </Card.Text>
        <Link to={`/subcategory/${category.slug}`}>
        <Button>
          View more
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
