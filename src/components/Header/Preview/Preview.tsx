import "./Preview.scss";
import resumeScreenshot from "../../../../public/Resume/resumeScreenshot.jpg";

export default function Preview() {
  return (
    <div className="resumePreview">
      <img src={resumeScreenshot} className="imgPreview"></img>
    </div>
  );
}
