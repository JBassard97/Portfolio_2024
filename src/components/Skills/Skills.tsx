import "./Skills.scss";

export default function Skills() {
  return (
    <>
      <p className="header">Skills</p>
      <div className="skill-wrapper">
        <div className="skill-list">
          <h3>Languages</h3>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>SQL & noSQL</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill-list">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Component Testing</li>
            <li>Sass</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>Responsive Design</li>
            <li>Vite</li>
            <li>WebPack</li>
          </ul>
        </div>
        <div className="skill-list">
          <h3>Backend</h3>
          <ul>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Mongoose ODM</li>
            <li>Sequelize ORM</li>
            <li>Handlebars</li>
            <li>Flask (Python)</li>
            <li>Django (Python)</li>
            <li>Jest</li>
          </ul>
        </div>
        <div className="skill-list">
          <h3>Learning</h3>
          <ul>
            <li>AWS</li>
            <li>Anglular</li>
            <li>Vue</li>
          </ul>
        </div>
      </div>
    </>
  );
}
