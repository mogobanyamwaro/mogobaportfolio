import React, { useEffect, useRef } from "react";
import { init } from "ityped";

import "./Intro.scss";
function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Man.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Douglas Mogoba </h1>
          <h3 style={{ color: "darkblue" }}>FullStack Developer</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
