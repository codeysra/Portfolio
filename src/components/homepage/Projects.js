import React from "react";

const Projects = () => (
    <section id="projects"  className="text-center sections">
        <div className="container">
            <h1 className="sections-h1">My Projects</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                         
                        <div className="card-body">
                            <h3 className="card-title">My Personal Portfolio</h3>
                            <p>Created a portfolio using React. Aside from React, I used Scss and Bootstrap for styling the page.
                            The portfolio is a single page application that uses scroll to move
                            from one section of the page to another.</p>
                            <div className="tech-used">
                            <i className="fas fa-tags"></i>
                                react javascript scss bootstrap
                            </div>
                            <a href="https://github.com/yousrasdn/Portfolio">
                                <i className="fab fa-github fa-2x"></i> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mt-4 mt-md-0">
                         
                        <div className="card-body">
                            <h3 className="card-title">A Todo List App</h3>
                            <p>Created a simple todo list application using Spring MVC, Spring Security and Hibernate. 
                            The app has sign up/sign in functionalities. When signed in, the user can create,retrieve,
                            update or delete a todo item.</p>
                            <div className="tech-used">
                            <i className="fas fa-tags"></i>
                                <span>Spring Mvc</span> <span>Spring Security</span> java hibernate 
                            </div>
                            <a href="https://github.com/yousrasdn/Todo-List-App">
                                <i className="fab fa-github fa-2x"></i> 
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
);

export default Projects;