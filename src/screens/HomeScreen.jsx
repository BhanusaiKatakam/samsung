import React from "react";
import Hero from "../layouts/Hero";
import CardsContainer from "../layouts/CardsContainer";

const HomeScreen = () => {
  return (
    <div className="home_screen_container">
      <Hero />
      <div className="home_cards_container">
        <CardsContainer />
        <CardsContainer />
      </div>
    </div>
  );
};

export default HomeScreen;
