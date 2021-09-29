import "./technology.scss"
import img3 from "../images/html.png"
import img4 from "../images/css.png"
import img5 from "../images/js.png"
import img6 from "../images/react.png"
import img7 from "../images/php.png"
import img8 from "../images/python.png"
import img9 from "../images/git.png"
import img10 from "../images/linux.png"


export default function Technology() {
    return (
        <div className="work" id="technology">
            <h1>Technologies with hands on experience</h1>
            <div className="container">
                <div className="item">
                    <img src={img3} alt="" />
                    <h3>HTML5</h3>
                </div>
                <div className="item">
                    <img src={img4} alt="" />
                    <h3>CSS3</h3>
                </div>
                <div className="item">
                    <img src={img5} alt="" />
                    <h3>JavaScript</h3>
                </div>
                <div className="item">
                    <img src={img6} alt="" />
                    <h3>React</h3>
                </div>
                <div className="item">
                    <img src={img7} alt="" />
                    <h3>PHP</h3>
                </div>
                <div className="item">
                    <img src={img8} alt="" />
                    <h3>Python</h3>
                </div>
                <div className="item">
                    <img src={img9} alt="" />
                    <h3>Git</h3>
                </div>
                <div className="item">
                    <img src={img10} alt="" />
                    <h3>Linux</h3>
                </div>
            </div>
        </div>
    );
}
 