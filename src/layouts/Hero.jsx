import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setCurrentCarouselIndex(selectedIndex);
  };

  const tempArray = [
    {
      caption: {
        label: "one",
        about: "one is the first number in the number list",
      },
    },
    {
      caption: {
        label: "Two",
        about: "Two is the first number in the number list",
      },
    },
    {
      caption: {
        label: "Three",
        about: "Three is the first number in the number list",
      },
    },
  ];

  return (
    <Carousel
      activeIndex={currentCarouselIndex}
      onSelect={handleSelect}
      interval={2000}
      pause="hover"
    >
      {tempArray?.map((item, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <h1>{item.caption.label}</h1>
          </div>
          <Carousel.Caption>
            <p>{item.caption.about}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
