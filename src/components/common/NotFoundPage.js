import React from 'react';
import {Link} from 'react-router-dom';

 

class NotFoundPage extends React.Component{

    componentDidMount(){
        document.title="404 Not Found";
    }

    render(){
        return(
            <div>
            <h1>404 EROROR</h1>
            <p>This page does not exist.</p>
    
            <Link to="/">Go Back To Homepage</Link>
         </div>
        );
    };
}
 

export default NotFoundPage;