import React from 'react';
import Nav from "../common/Nav";
const ProjectItem =(props) => (
    <div className="container">
        
        <div>
            <h1>A thing Ive done</h1>
            <p> Details on # {props.match.params.id}  </p>
        </div>
    </div>
    
);

export default ProjectItem;