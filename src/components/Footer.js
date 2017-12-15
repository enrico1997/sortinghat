import React from "react";
import logo from '../logo.svg';
import "../styles/Footer.css";

// By importing the Footer.css file, it is added to the DOM whenever this component loads

const Footer = () => (
	<footer className="App-footer">
		<h1 className="App-title">Sorting Hat Game
			<img src={logo} className="App-logo" alt="logo" />
		</h1>
		<p className="muted credit">Copyright &copy; 2017 Enrico Bernardo</p>
	</footer>
);

export default Footer;
