import "./Header.scss";
import resume from "../../../public/Resume/J_Acciarito Resume 2024.pdf";
import "./headerFuncs.ts";
import Preview from "./Preview/Preview.tsx";
import Projects from "../Projects/Projects.tsx";
import Skills from "../Skills/Skills.tsx";
import FindMeAt from "../FindMeAt/FindMeAt.tsx";

export default function Header({ changeMiddle }) {
  const handleFindMe = () => {
    changeMiddle(<FindMeAt />);
  };

  const handleDownload = () => {
    window.open(resume, "_blank");
  };

  const handleSkills = () => {
    changeMiddle(<Skills />);
  };

  const handlePreview = () => {
    changeMiddle(<Preview />);
  };

  const handleProjects = () => {
    changeMiddle(<Projects />);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a onClick={() => changeMiddle("")} href="#" className="logo">
            Jonathan Acciarito
          </a>
          <ul className="nav-links">
            <li className="dropdown">
              <div className="dropdown-container">
                <a href="#about">About</a>
                <div className="dropdown-content">
                  <a className="dropdown-item" href="#">
                    My Story
                  </a>
                  <a className="dropdown-item" href="#">
                    Cover Letter
                  </a>
                  <a
                    onClick={() => changeMiddle("My Cats")}
                    className="dropdown-item"
                    href="#"
                  >
                    My Cats
                  </a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <div className="dropdown-container">
                <a className="portTab" href="#portfolio">
                  Portfolio
                </a>
                <div className="dropdown-content">
                  <a
                    onClick={handleProjects}
                    className="dropdown-item projectTab"
                    href="#"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <div className="dropdown-container">
                <a href="#contact">Contact</a>
                <div className="dropdown-content">
                  <a className="dropdown-item" href="#">
                    Contact Form
                  </a>
                  <a onClick={handleFindMe} className="dropdown-item" href="#">
                    Find Me At...
                  </a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <div className="dropdown-container">
                <a href="#resume">Resume</a>
                <div className="dropdown-content">
                  <a onClick={handleSkills} className="dropdown-item" href="#">
                    Skills
                  </a>
                  <a className="dropdown-item" href="#" onClick={handlePreview}>
                    Preview
                  </a>
                  <a
                    onClick={handleDownload}
                    className="dropdown-item"
                    href="#"
                  >
                    Download
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}