import React from "react";
import Header from "./Header";
import About from "./About";

class Homepage extends React.Component {
  componentDidMount() {
    document.title = "Yousra's Portfolio";
  }
  
 
   
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default Homepage;
