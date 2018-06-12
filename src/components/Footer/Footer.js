import React from "react";
import "./Footer.css";
const Footer = () => (
    <div className="footer">
    <nav className="navbar navbar-inverse ">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Clicky Game</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Click an Image to Begin !</a></li>
      
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"> Score: <span>0</span> </a> </li>
      <li><a href="#">|</a></li>
      <li><a href="#"> Top Score: <span>0</span> </a></li>
    </ul>
  </div>
</nav>
</div>

  );
  
  
export default Footer;