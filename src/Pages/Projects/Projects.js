import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../../Components/Navbar/Navbar";

import "./ProjectsStyles.css";
import { projects } from "../../projects";
import { FaGithub, FaEye } from "react-icons/fa";
import logo from "../../Assets/mylogo2.png";

export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div>
      <nav>
        <div>
          <img
            style={{
              width: "150px",
              marginTop: "9px",
              height: "15vh",
              textAlign: "center",
              alignItems: "center",
              objectFit: "fill",
            }}
            src={logo}
            alt="myLogo"
          />
        </div>
        <ul className="nav-menu2">
          <a href="/">Go back to Homepage </a>
        </ul>

        <div>
          <ul className="mobile-nav"></ul>
          <button className="btnn">
            <a href="/">Homepage</a>
          </button>
        </div>
      </nav>

      <section className="name001">
        <div className="myPro">
          <h2>My Projects</h2>
        </div>
        <div className="projectBox">
          <div className="projectGrid">
            {projects.map((project) => (
              <div className="projctCard" data-aos="fade-up">
                <h3 className="projectTitle">{project.title}</h3>
                <h4 className="projectTool">{project.tools}</h4>
                <p className="projectDesc">{project.desciption}</p>
                <div className="projectRoute">
                  <h5 className="projectLink">
                    <a href={project.route} target={"_blank"} rel="noreferrer">
                      Live <FaEye />
                    </a>
                  </h5>
                  <h5 className="projectLink">
                    <a href={project.github} target={"_blank"} rel="noreferrer">
                      Code <FaGithub />
                    </a>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// export default Projects;
