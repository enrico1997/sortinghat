import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Header = () => (
  <header className="header">
    <h1>Sorting Hat!</h1>
    <h2>Click on an image only once per round to earn points. Choose it twice and Obliviate!</h2>
  </header>
);

export default Header;
