import React from "react";
import { Card } from "react-bootstrap";

const CardBlock = ({ cardObject }) => {
  return (
    <Card className="card_container">
      <Card.Img
        src={require(`../${cardObject.image}`)}
        alt="image"
        variant="top"
        className="card_image"
      />
      <Card.Body className="card_body">
        <Card.Title className="card_body_title">{cardObject?.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardBlock;
