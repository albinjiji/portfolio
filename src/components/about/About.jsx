import "./about.scss";
import img2 from "../images/rect.jpg"

export default function About() {
  return (
  <div className="portfolio" id="about">
    <div className="left">
      <div className="wrapper">
        <h1>I'm <span>Albin Jiji</span></h1>
        <p>
        "Passionate about implementing and launching new 
        projects. Ability to translate business requirements 
        into technical solutions. Looking to start the 
        career as an entry-level software engineer with
         a reputed firm driven by technology."
        </p>
      </div>
    </div>
    <div className="right">
      <div className="imgContainer">
        <img src={img2} alt="" />
      </div>
    </div>
  </div>
  );
}
