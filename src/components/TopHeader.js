import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TopHeader = () => {
  return (
    <Container fluid className="bg-secondary">
      <Row>
        <Col><h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Welcome to TopPickHub</h1></Col>
        <div>
      <p>
        <a href="/advertising-disclosure">
          Advertising Disclosure
        </a>
      </p>
      <h2>Discover What's on Top!</h2>
      <h2>TopPickHub.in</h2>
      <p>
      TopPickHub is your ultimate destination for discovering the best in every category. Find trusted top picks curated to help you make smarter choices effortlessly.
      </p>
    </div>
      </Row>
    </Container>
  );
};

export default TopHeader;
