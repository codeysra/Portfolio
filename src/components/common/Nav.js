import React,{Component} from "react";
import { NavLink, Link } from "react-router-dom";
import Scrollchor from 'react-scrollchor';
 

class Nav  extends Component{
  componentDidMount() {
    // window.addEventListener("click",this.handleClick);
     window.addEventListener("scroll", this.handleScroll);
     //window.addEventListener("click", this.handleClick);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleClick=event =>{
   
       
  };

  handleScroll = event => {
     // Modifying the nav style onscroll: transparent => white 
      if (window.scrollY>20 || document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar").classList.add("dark-navbar");
        document.querySelector(".navbar-brand").classList.add("dark-brand");

      } else {
        document.querySelector(".navbar").classList.remove("dark-navbar");
        document.querySelector(".navbar-brand").classList.remove("dark-brand");
      }
    // End of  -- Modifying the nav style onscroll: transparent => white

 
    /* Updating the nav's current active item link */
      const scrollYPos = (window.scrollY?window.scrollY:document.documentElement.scrollTop);
      const navY = document.querySelector("nav").clientHeight;
      const navItems = document.getElementById("nav-items").getElementsByTagName('a');
      for(let i=0; i< navItems.length; i++){
        const currentItem = navItems[i];
        
        const hashPos = currentItem.href.indexOf("#");
        const refItem = document.querySelector((currentItem.href).substring(hashPos));
        const refItemPos =  refItem.getBoundingClientRect();
        console.log( (currentItem.href).substring(hashPos) );
        console.log(refItemPos);
        console.log(scrollYPos);
        console.log(navY);

        const top = refItemPos.top - navY;
        const bottom =  refItemPos.height - navY + refItemPos.top;
        if( top<=0 && bottom>0
        ){
          currentItem.classList.remove("non-active");
          window.scrollY>20?currentItem.classList.add("active"):currentItem.classList.remove("active");
          const currentHash = (currentItem.href).substring(hashPos)+"-section";
          window.location.hash=currentHash;
        }else{
          currentItem.classList.remove("active");
          window.scrollY>20 ? currentItem.classList.add("non-active"):currentItem.classList.remove("non-active");
          
        }
      }
    /* END of -- Updating the nav's current active item link */
  };
//refItemPos.top - navY <=0
  
/*refItemPos.top<=0 && refItemPos.top-navY <= scrollYPos && 
          refItemPos.height - navY >= -refItemPos.top */
  componentDidUpdate(){
    }
  render(){
    return (
       
   
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        <Scrollchor className="navbar-brand" to="#header">ys<span>.</span></Scrollchor>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" id="nav-items">
            <li className="nav-item">
              <Scrollchor to="#header"  >
                  Home
              </Scrollchor>
            </li>
            <li className="nav-item">
              <Scrollchor to="#about"  >
                  About
              </Scrollchor>
            </li>
            <li className="nav-item">
              <Scrollchor to="#skills"  >
                  Skills
              </Scrollchor>
            </li>
            <li className="nav-item">
              <Scrollchor to="#projects">
                  Projects
              </Scrollchor>
            </li>
            <li className="nav-item">
              <Scrollchor to="#contact">
                  Contact 
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
 