import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from './Projects';
import Contact from './Contact';

class Homepage extends React.Component {
  componentDidMount() {
    document.title = "Yousra's Portfolio";
  }
  
 
   
  render() {
    return (
      <div>
        <Header />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    );
  }
}

export default Homepage;
