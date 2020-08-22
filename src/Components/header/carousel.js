import React from "react";
import { Container, Carousel, Button, Row } from "react-bootstrap";
import classes from "./header.module.css";
import Column from "./topleader";
const url =
  "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
const header = () => {
  return (
    <Container className="mt-4 my-0" fluid>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={url}
            alt="First slide"
            style={{ height: "300px" }}
          />
          <Carousel.Caption>
            <h3>Welcome to the leaderboards of AEC coders</h3>
            <Button variant="outline-primary">Get started</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={url}
            alt="Third slide"
            style={{ height: "300px" }}
          />

          <Carousel.Caption>
            <Row>
              <Column />
              <Column />
              <Column />
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={url}
            alt="Third slide"
            style={{ height: "300px" }}
          />

          <Carousel.Caption>
            <h3>Join the community</h3>
            <Button variant="outline-success">Join now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
export default header;
