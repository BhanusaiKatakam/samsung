import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import HomeScreen from "./screens/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./screens/Screens.css";
import "./layouts/Layout.css";

const App = () => {
  return (
    <div className="samsung_main_container">
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
};

export default App;
