import "./AboutMe.scss";
import mePic from "../../../public/mePic.png";

export default function AboutMe() {
  return (
    <>
      <p className="header">About Me</p>
      <img className="mePic" src={mePic}></img>
      <div className="about-div">
        <p>
          Hello, I'm Jonathan Acciarito, a recent graduate from the Full-Stack
          Coding Bootcamp at UNC Chapel Hill. After spending the past seven
          years managing and operating various food service brands, I'm excited
          to transition into a new career path.
        </p>
        <p>
          Throughout my career, I've cultivated a strong work ethic and refined
          my communication skills, both of which I believe are essential for
          success in any field. Outside of work, I enjoy spending time with my
          two cats and my supportive wife. Additionally, I have a passion for
          music and often find myself playing the electric ukulele in my free
          time.
        </p>
        <p>
          I'm eager to bring my diverse skill set and enthusiasm for learning to
          a new role in the tech industry. I'm motivated by the opportunity to
          continue growing both personally and professionally, and I'm excited
          to see where this next chapter takes me.
        </p>
      </div>
    </>
  );
}
