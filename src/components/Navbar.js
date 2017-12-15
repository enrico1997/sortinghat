import React from "react";
import "../styles/Navbar.css";
let brand = <a href='/'>Sorting Hat Game</a>;

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
  <nav className="navbar">
  	<ul>
		<li>{brand}</li>
		<li>Click an image to begin!</li>
		<li> Score: 0 | Top Score: 0</li>
	</ul>
  </nav>
);

export default Navbar;
