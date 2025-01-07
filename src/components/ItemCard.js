// src/components/ItemCard.js
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

const ItemCard = ({ item }) => {

  const { slug } = useParams(); // Get slug parameter from URL
      const [items, setItems] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
        const fetchItems = async () => {
          try {
            // Fetching items for the subcategory passed via state
            const fetchedItems = await Api.getItemsBySubcategory(slug);
            setItems(fetchedItems);
          } catch (error) {
            setError('Failed to load items');
          }
        };

        fetchItems();
      }, [slug]);

      if (!items) {
        return <div>Error: No items data available</div>;
      }

      return (
        <Container>
          <h2 className="mb-4 text-center">Explore Our Top Items</h2>

          {loading && <div className="text-center">Loading categories...</div>}
          {error && <div style={{ color: 'red' }} className="mb-4 text-center">{error}</div>}

          <Row className="category-cards">
            {items.map(item => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                <Card className="h-100 w-100 d-flex flex-column">
          {item.image && (
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.name}
              className="category-image"
            />
          )}
          <Card.Body className="d-flex flex-column">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text className="flex-grow-1">
              {item.description}
            </Card.Text>
            <Link to={`/subcategoryItems/${item.slug}`}>
            <Button>
              View Items
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

export default ItemCard;
