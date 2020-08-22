import React, { useState } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Components/header/carousel";
import Navbar from "./Components/navbar/navbar";
import Leaderboard from "./Components/leaderboard/leaderboard";
import Userranking from "./Components/userranking/userranking";
import Updates from "./Components/updates/updates";

const App = () => {
  const [rankings, setRanking] = useState({
    data: [
      {
        rank: "1",
        name: "John Doe",
        badge: "5",
        score: "96%",
      },
      {
        rank: "2",
        name: "Mark Doe",
        badge: "4.5",
        score: "94%",
      },
      {
        rank: "3",
        name: "Elliot Olderson",
        badge: "4.3",
        score: "92%",
      },
    ],
  });
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Row className="px-3 py-3 justify-content-between">
        <Leaderboard list={rankings} />
        <Col xs={12} md={4}>
          <Row>
            <Col xs={12}>
              <Userranking />
            </Col>
            <Col xs={12}>
              <Updates />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default App;
