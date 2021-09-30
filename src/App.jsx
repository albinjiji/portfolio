import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Technology from "./components/technology/Technology";
import Connect from "./components/connect/Connect";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Technology />
        <Connect />
        <Contact />
      </div>
    </div>
  );
}

export default App;
