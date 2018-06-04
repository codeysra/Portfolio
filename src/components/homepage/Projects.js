import React from "react";
import Scrollchor from 'react-scrollchor';
import {Link} from 'react-router-dom';

const Projects = () => (
    <section id="projects"  className="text-center sections">
        <div className="container">
            <h1 className="sections-h1">My Projects</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <img  className="card-img-top"  src={require('./img/portfolio-project.png')}/>
                         
                        <div className="card-body">
                            <h3 className="card-title">My Personal Portfolio</h3>
                            <Link to="/project/1">Know More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </div>
    </section>
);

export default Projects;