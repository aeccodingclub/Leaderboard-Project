import React from "react";
import { Col, Table } from "react-bootstrap";
const leaderboard = (props) => {
  return (
    <Col xs={12} md={8}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Badges</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {props.list.data.map((p) => {
            return (
              <tr>
                <td>{p.rank}</td>
                <td>{p.name}</td>
                <td>
                  {p.badge} <i class="fas fa-star"></i>
                </td>
                <td>{p.score}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>
  );
};
export default leaderboard;
