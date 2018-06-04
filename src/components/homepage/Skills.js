import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="dark-background text-center sections">
      <div className="container">
        <h1 className="sections-h1">My Skills</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2>Back End</h2>
                <div className="skill">
                  <h3>Java</h3>
                  <div className="progress">
                    <div
                      id="java-skill"
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <h3>Spring MVC & Hibernate</h3>
                  <div className="progress">
                    <div
                      id="spring-hibernate-skill"
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2>Front End</h2>
                <div className="skill">
                  <h3>React</h3>
                  <div className="progress">
                    <div
                      id="react-js"
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <h3>Javascript</h3>
                  <div className="progress">
                    <div
                      id="react-js"
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      70%
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <h3>Html & Css</h3>
                  <div className="progress">
                    <div
                      id="html-css"
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
