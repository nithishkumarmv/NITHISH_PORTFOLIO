import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="container my-5">
      <h2>Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">A description of project 1.</p>
              <a href="#" className="btn btn-primary">View</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project 2</h5>
              <p className="card-text">A description of project 2.</p>
              <a href="#" className="btn btn-primary">View</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
