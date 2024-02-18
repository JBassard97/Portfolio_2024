import "./Preview.scss";
import resumeScreenshot from "../../../../public/Resume/resumeScreenshot.png";

export default function Preview() {
  return (
    <>
      <p className="title">Resume Preview</p>
      <div className="resumePreview">
        <img src={resumeScreenshot} className="imgPreview"></img>
      </div>
    </>
  );
}
