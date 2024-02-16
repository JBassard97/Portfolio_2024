import "./FindMeAt.scss";

export default function FindMeAt() {
  return (
    <div>
      <p className="header">Find Me At...</p>
      <div className="links-list">
        <ul>
          <li>
            <a className="link" href="https://github.com/JBassard97">GitHub (JBassard97)</a>
          </li>
          <li>
            <a className="link" href="https://www.linkedin.com/in/jonathan-acciarito-46434b2aa">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link" href="https://www.npmjs.com/~jbassard97">npm</a>
          </li>
        </ul>
        <p className="header">Contact me</p>
        <ul className="links-list">
          <li>
            <a href="mailto:jonathanacciarito@gmail.com">jonathanacciarito@gmail.com</a>
          </li>
          <li>
            <a href="tel:+8049711162">(804) 971-1162</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
