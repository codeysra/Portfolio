import React,{Component} from "react";
import { NavLink, Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';
 

class Nav  extends Component{
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
  };
  componentDidUpdate(){
   }
  render(){
    return (
       
   
    <nav className="navbar navbar-expand-md navbar-light bg-light ">
      <div className="container">
        <Scrollchor className="navbar-brand" to="#home">Portoflio</Scrollchor>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Scrollchor to="#header" 
            className={location.hash == "#header" ? "active" : ""}>
                Home
            </Scrollchor>
          </li>
          <li className="nav-item">
            <Scrollchor to="#about"  
             
            className={location.hash == "#about" ? "active" : ""}>
                About
            </Scrollchor>
          </li>
          </ul>

        </div>
        </div>
    </nav>

   
  
    
    );
  };
}
  
 

 

export default Nav;
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