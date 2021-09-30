import "./contact.scss"
import img from "../images/connect1.jpg"
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={img} alt="" />
                <div className="footer">
                    <h3>Albin Jiji © 2021 Powerd by React.Js</h3>
                </div>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks,</span>}
                </form>
            </div>
            
        </div>
    )
}
 