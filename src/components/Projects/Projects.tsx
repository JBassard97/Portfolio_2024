import "./Projects.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import projectsData from "../../../public/Projects/projectData.json";

console.log(projectsData);

export default function Projects() {
  return (
    <>
      <p className="title">My Projects</p>
      <div className="carousel">
        {projectsData.map((project, index) => (
          <div key={index} className="carousel__item">
            <ProjectCard
              title={project.title}
              desc={project.desc}
              imgPath={project.imgPath}
              stack={project.stack}
              github={project.github}
            />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button
          className="prev button-6"
          onClick={() => {
            const carousel: any = document.querySelector(".carousel");
            const clone = carousel.lastElementChild.cloneNode(true);
            carousel.lastElementChild.remove();
            carousel.prepend(clone);
          }}
        >
          Prev
        </button>
        <button
          className="next button-6"
          onClick={() => {
            const carousel: any = document.querySelector(".carousel");
            const clone = carousel.firstElementChild.cloneNode(true);
            carousel.firstElementChild.remove();
            carousel.append(clone);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
