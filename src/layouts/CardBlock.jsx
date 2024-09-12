import React from "react";
import { Card } from "react-bootstrap";

const CardBlock = ({ cardObject }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{cardObject?.title}</Card.Title>
        <Card.Text>{cardObject?.about}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBlock;
