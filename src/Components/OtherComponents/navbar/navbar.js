import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
const navbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <i className="fas fa-code"></i> AEC Leaderboard
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Form inline className="mt-3 mt-lg-0">
            <InputGroup>
              <FormControl
                placeholder="Search coders"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">
                  <i className="fas fa-search" type="button"></i>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About us</Nav.Link>
          <Nav.Link href="#link">Login</Nav.Link>
          <Nav.Link href="#link">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default navbar;
