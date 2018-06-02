import React from 'react';
import Home from './Home';
import About from './About';

class Homepage extends React.Component{
    componentDidMount(){
        document.title="Yousra's Portfolio";
    }

    render(){
        return (
            <div className="container">
                <Home/>
                <About/>
            </div>
        );
    };
}

export default Homepage;

