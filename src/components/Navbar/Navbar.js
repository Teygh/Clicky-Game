import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    state = {
      count: 0,
      topScore: 0,
    };

    // handleIncrement = () => {
    //     this.setState({ count: this.state.count + 1 });
    //   };

      return () {


    <div className="navbar">
    <nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Clicky Game</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Click an Image to Begin !</a></li>
      
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#"> Score: <span>{this.state.count}</span> </a> </li>
      <li><a href="#">|</a></li>
      <li><a href="#"> Top Score: <span>0</span> </a></li>
    </ul>
  </div>
</nav>
</div>

  

}

}

  
  
export default Navbar;