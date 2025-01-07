    // src/components/SubcategoryCard.js
    import ItemCard from './ItemCard';
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';
    import Collapse from 'react-bootstrap/Collapse';
    import Container from 'react-bootstrap/Container';
    import Row from 'react-bootstrap/Row';
    import Col from 'react-bootstrap/Col';
    import React, { useState, useEffect } from 'react';
    import { useLocation, useParams } from 'react-router-dom';
    import Api from '../services/api'; // Import API class
    import { Link } from 'react-router-dom'; // For navigation if needed
    import '../HomePage.css';


    const SubcategoryCard = () => {
      const { slug } = useParams(); // Get slug parameter from URL
      const [subCategories, setSubCategories] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
        const fetchSubCategories = async () => {
          try {
            // Fetching items for the subcategory passed via state
            const fetchedItems = await Api.getSubcategoryByCategory(slug);
            setSubCategories(fetchedItems);
          } catch (error) {
            setError('Failed to load items');
          }
        };

        fetchSubCategories();
      }, [slug]);

      if (!subCategories) {
        return <div>Error: No subcategory data available</div>;
      }

      return (
        <Container>
          <h2 className="mb-4 text-center">Explore Our Top Sub-Categories</h2>

          {loading && <div className="text-center">Loading categories...</div>}
          {error && <div style={{ color: 'red' }} className="mb-4 text-center">{error}</div>}

          <Row className="category-cards">
            {subCategories.map(subCategory => (
              <Col key={subCategory.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                <Card className="h-100 w-100 d-flex flex-column">
          {subCategory.image && (
            <Card.Img
              variant="top"
              src={subCategory.image}
              alt={subCategory.name}
              className="category-image"
            />
          )}
          <Card.Body className="d-flex flex-column">
            <Card.Title>{subCategory.name}</Card.Title>
            <Card.Text className="flex-grow-1">
              {subCategory.description}
            </Card.Text>
            <Link to={`/subcategoryItems/${subCategory.slug}`}>
            <Button>
              View more
            </Button>
            </Link>
          </Card.Body>
        </Card>
              </Col>
            ))}
          </Row>
        </Container>
        
      );
    };

    export default SubcategoryCard;
