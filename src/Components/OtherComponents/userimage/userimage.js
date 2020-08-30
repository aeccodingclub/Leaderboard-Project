import React from "react";
import { Card, Button } from "react-bootstrap";
const url =
  "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const userimage = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }} bg="dark" text="light">
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Button variant="primary">Edit profile</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default userimage;
