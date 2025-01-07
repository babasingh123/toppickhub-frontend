import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-secondary text-white p-4">
          <Col className="mx-5">
            <Stack>
              <Image
                src="https://www.shutterstock.com/image-vector/abstract-initial-letter-d-logo-600nw-2055050639.jpg"
                alt="company logo"
                rounded
                width={150}
                height={150}
              />
              <h2>TopPickHub</h2>
              <p>Discover What's on Top!</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              <p>Useful Links</p>
              <NavLink href="#" className="text-white">Home</NavLink>
              <NavLink href="#" className="text-white">About</NavLink>
              <NavLink href="#" className="text-white">Products</NavLink>
              <NavLink href="#" className="text-white">We're hiring!</NavLink>
            </Nav>
          </Col>
          <Col>
            <p>Column 3</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
