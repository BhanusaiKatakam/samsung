import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBlock from "./CardBlock";

const CardsContainer = () => {
  const cardsArray = [
    {
      rows: [
        { title: "s2", about: "s2 is 2 series" },
        { title: "s3", about: "s3 is 2 series" },
      ],
    },
    {
      rows: [
        { title: "s4", about: "s4 is 2 series" },
        { title: "s5", about: "s5 is 2 series" },
      ],
    },
  ];
  return (
    <Container>
      {cardsArray?.map((rows, rowsIndex) => (
        <Row key={rowsIndex}>
          {rows?.rows?.map((card, cardIndex) => (
            <Col key={cardIndex}>
              <CardBlock cardObject={card} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default CardsContainer;
