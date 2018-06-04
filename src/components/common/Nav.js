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
   
    if (window.scrollY>20 || document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       document.querySelector(".navbar").classList.add("dark-navbar");
       document.querySelector(".navbar-brand").classList.add("dark-brand");

    } else {
      document.querySelector(".navbar").classList.remove("dark-navbar");
      document.querySelector(".navbar-brand").classList.remove("dark-brand");
    }

 
    // Updating Nav Current Active Item Link
    const scrollYPos = (window.scrollY?window.scrollY:document.documentElement.scrollTop);
    const navY = document.querySelector("nav").clientHeight;
    const navItems = document.getElementById("nav-items").getElementsByTagName('a');
    
    for(let i=0;i<navItems.length;i++){
      const currentItem = navItems[i];
      const hashPos = currentItem.href.indexOf("#");
      const refItem = document.querySelector((currentItem.href).substring(hashPos));
      const refItemPos =  refItem.getBoundingClientRect();
      if(refItemPos.top<=0 && refItemPos.top-navY <= scrollYPos && 
        refItemPos.height - navY >= -refItemPos.top
      ){
        window.scrollY>20?currentItem.classList.add("active"):currentItem.classList.remove("active");
        currentItem.classList.remove("non-active");
      }else{
        currentItem.classList.remove("active");
        const refCurrentItem =  document.querySelector((currentItem.href).substring(hashPos)+"-nav-item");
        window.scrollY>20 ? refCurrentItem .classList.add("non-active"):refCurrentItem .classList.remove("non-active");
      }
       
     
    }
  };

  

  componentDidUpdate(){
    }
  render(){
    return (
       
   
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        <Scrollchor className="navbar-brand" to="#header">ys<span>.</span></Scrollchor>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" id="nav-items">
            <li className="nav-item">
              <Scrollchor to="#header" 
               className="nav-item-link" id="header-nav-item">
                  Home
              </Scrollchor>
            </li>
            <li className="nav-item">
              <Scrollchor to="#about"  
               className="nav-item-link" id="about-nav-item">
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