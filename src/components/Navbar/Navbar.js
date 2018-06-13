import React from "react";
import "./Navbar.css";

const Navbar = props => (
    

    <nav className="navbar navbar-inverse  fixed-top" >
        <ul>
            <li className="brand">Clicky Game</li>
            <li>Click on an image to begin!</li>
            <li>Current Score: {props.score} | Top Score: {props.topScore}  </li>
        </ul>
    </nav>
);
 
export default Navbar;