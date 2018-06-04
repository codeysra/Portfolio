import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";

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
      </div>
    );
  }
}

export default Homepage;
