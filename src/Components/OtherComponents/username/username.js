import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
const username = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>John Doe</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default username;
