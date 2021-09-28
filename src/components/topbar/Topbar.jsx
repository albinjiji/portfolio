import "./topbar.scss";

export default function Topbar() {
  return <div className="topbar">
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">albin.</a>
        <div className="itemContainer">

        </div>
      </div>
      <div className="right">
        <div className="humburger">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div> 
      </div>
    </div>
  </div>;
}
