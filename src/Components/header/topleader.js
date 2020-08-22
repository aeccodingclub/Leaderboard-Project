import React from "react";
import { Col, Image, Badge } from "react-bootstrap";
import classes from "./header.module.css";
const url2 =
  "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80";
const column = () => {
  return (
    <Col>
      <div className="d-flex flex-column justify-content-between align-items-center">
        <Image src={url2} roundedCircle className={classes.imgSize} />
        <Badge variant="success" className="my-md-3 my-1">
          Rank 1
        </Badge>
        <Badge variant="primary">
          Followers
          <br />
          <Badge variant="light">500</Badge>
        </Badge>
      </div>
    </Col>
  );
};
export default column;
