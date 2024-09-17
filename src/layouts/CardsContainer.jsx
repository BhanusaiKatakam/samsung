import React from "react";
import CardBlock from "./CardBlock";

const CardsContainer = () => {
  const cardsArray = [
    {
      rows: [
        {
          image: "assets/images/mobiles/Galaxy_a35_5g.avif",
          name: "GALAXY A35 5G",
        },
        {
          image: "assets/images/mobiles/Galaxy_s23_fe.avif",
          name: "GALAXY S23 FE",
        },
      ],
    },
    {
      rows: [
        {
          image: "assets/images/mobiles/Galaxy_a35_5g.avif",
          name: "GALAXY A35 5G",
        },
        {
          image: "assets/images/mobiles/Galaxy_s23_fe.avif",
          name: "GALAXY S23 FE",
        },
      ],
    },
  ];
  return (
    <>
      <div className="cards_container">
        {cardsArray?.map((rows, rowsIndex) => (
          <div className="cards_row_container" key={rowsIndex}>
            {rows?.rows?.map((card, cardIndex) => (
              <div key={cardIndex} className="cards_card_container">
              <CardBlock cardObject={card} key={cardIndex} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardsContainer;
