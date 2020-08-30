import React from "react";
import Navbar from "../../OtherComponents/navbar/navbar";
import { Row, Col, Container } from "react-bootstrap";
import UserImage from "../../OtherComponents/userimage/userimage";
import Username from "../../OtherComponents/username/username";
import UserInfo from "../../OtherComponents/userInfo/userInfo";
import LeaderBoard from "../../OtherComponents/leaderboard/leaderboard";
import Share from "../../OtherComponents/share/share";

const userdetails = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <UserImage />
          </Col>
          <Col xs={12} md={8}>
            <Username />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <UserInfo />
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12}>
                <h1>About</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Col>
              <Col xs={12}>
                <h1>Leader board will be shown here</h1>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={2}>
            <Share />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default userdetails;
