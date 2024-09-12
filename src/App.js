import React from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import HomeScreen from "./screens/HomeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <Footer />
    </>
  );
};

export default App;
