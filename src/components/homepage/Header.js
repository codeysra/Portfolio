import React from 'react';
import Nav from '../common/Nav';

const Header = () =>{
      return (
    <header id="header" className="header">
        <Nav/>
        <div className="header__textbox container"> 
            <h1>Hello, I'm <span>Yousra</span>.</h1>
            <h2>Full Stack Developer Based In Montreal,Qc</h2>
            
             
           
            <a className="btn btn--full" href="#projects">
            <i className="fa fa-briefcase"></i>
            My Projects</a>
            <a className="btn btn--transparent" href="#contact">
            <i className="fas fa-at"></i>
            Contact Me</a>
        </div>
        
        

    </header>
    );
};

export default Header;