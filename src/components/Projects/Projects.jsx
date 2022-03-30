import React from "react";
import "./Projects.scss";
import img from "../images/airbnb1.png";
import img2 from "../images/netflix.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="head">Projects</h1>
      <div className="slider">
        <div className="container">
          <div className="item">
            <a
              href="https://guileless-florentine-af3c90.netlify.app/"
              style={{ textDecoration: "none" }}
            >
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={img} alt="" />
                  </div>
                  <h2>Airbnb Clone</h2>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a
              href="https://competent-bhabha-1f8dab.netlify.app/"
              style={{ textDecoration: "none" }}
            >
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={img2} alt="" />
                  </div>
                  <h2>NetFlix Clone</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
