import "./Header.scss";
import resume from "../../../public/J Acciarito Resume 2024.pdf";
import "./headerFuncs.ts";
import Preview from "./Preview/Preview.tsx";
import Projects from "../Projects/Projects.tsx";

export default function Header({ changeMiddle }) {
  const handleDownload = () => {
    window.open(resume, "_blank");
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
                <a href="#portfolio">Portfolio</a>
                <div className="dropdown-content">
                  <a
                    onClick={handleProjects}
                    className="dropdown-item"
                    href="#"
                  >
                    Projects
                  </a>
                  <a className="dropdown-item" href="#">
                    Skills
                  </a>
                  <a className="dropdown-item" href="#">
                    Education
                  </a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <div className="dropdown-container">
                <a href="#contact">Contact</a>
                <div className="dropdown-content">
                  <a className="dropdown-item" href="#">
                    Item 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Item 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Item 3
                  </a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <div className="dropdown-container">
                <a href="#resume">Resume</a>
                <div className="dropdown-content">
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
