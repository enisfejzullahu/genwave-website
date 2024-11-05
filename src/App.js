// src/App.js
import React from "react";
import Header from "./components/Header"; // Import the Header component
import Body from "./components/Body";
import HeroCard from "./components/HeroCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <HeroCard />
    </div>
  );
}

export default App;
