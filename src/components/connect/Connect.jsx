import "./connect.scss";
import img from "../images/contact1.jpg";
import img1 from "../images/github.png";
import img2 from "../images/link.png";
import img3 from "../images/insta.png";
import fil from "../images/Resume_Albin_Jiji.pdf";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Connect() {
  return (
    <div className="testimonials" id="connect">
      <div className="left">
        <h1>
          Connect with <span>Me</span>
        </h1>
        <div className="container">
          <div className="item">
            <a href="https://github.com/albinjiji">
              <img src={img1} alt="" />
            </a>
          </div>
          <div className="item">
            <a href="https://www.linkedin.com/in/albin-jiji-4853ab144/">
              <img src={img2} alt="" />
            </a>
          </div>
          <div className="item">
            <img src={img3} alt="" />
          </div>
        </div>
        <div>
          <h4>
            {" "}
            <IoMdMail />
            albinjiji4@gmail.com{" "}
            <span className="text">
              <FaPhoneAlt /> +91 9207603364
            </span>
          </h4>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
