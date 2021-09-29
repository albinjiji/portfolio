import "./intro.scss";
import img1 from "../images/albin.jpg";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(()=> {
    init(textRef.current, { showCursor: true,
       backDelay: 1500,
       backSpeed: 60,
       placeholder: false,
       cursorChar: "_",
       strings: [ 'React' ] });
  }, []);

  return (
  <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer" alt="">
        <img src={img1}/>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Albin Jiji</h1>
        <h3> <span ref={textRef}></span> Developer</h3>
      </div>
    </div>
  </div>
  );
}
