import React from "react";
import { NavLink, Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';
 
const Header = () => (
  <header >
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Scrollchor class="navbar-brand" to="#home">Portoflio</Scrollchor>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Scrollchor to="#home" className={location.hash == "#home" ? "active" : ""}>
                Home
            </Scrollchor>
          </li>
          <li class="nav-item">
            <Scrollchor to="#about"  className={location.hash == "#about" ? "active" : ""}>
                About
            </Scrollchor>
          </li>
          </ul>

        </div>
        </div>
    </nav>

   
   </header>
); 

 

export default Header;
/*
<li class="nav-item" 
            onClick={()=>(
              document.getElementById('home').scrollIntoView(true)
            )} >
              <Scrollchor to="#home" className={location.hash == "#home" ? "active" : ""}>
                  Home
              </Scrollchor>
            </li>
            <li class="nav-item">
              <Scrollchor to="#about"  className={location.hash == "#about" ? "active" : ""}>
                  About
              </Scrollchor>
            </li>
            */