import React from 'react';
import './Skills.scss';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Profesional Skills</h2>
          <p className="skills__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            quidem pariatur vitae. Itaque ipsum dolorem error blanditiis non
            soluta nostrum?
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-html5 skills__icon"></i>
              <span className="skills__name">HTML5 & CSS</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div>
              <span className="skills__percentage">90%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-css3 skills__icon"></i>
              <span className="skills__name">PYTHON</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div>
              <span className="skills__percentage">85%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-javascript skills__icon"></i>
              <span className="skills__name">JAVASCRIPT</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div>
              <span className="skills__percentage">65%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxs-paint skills__icon"></i>
              <span className="skills__name">GIT</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            <div>
              <span className="skills__percentage">70%</span>
            </div>
          </div>
        </div>

        <div>
          <img src="assets/work.jpg" alt="" className="skills__img" />
        </div>
      </div>
      <a href="#works">
        <img src="assets/down.png" alt="" />
      </a>
    </section>
  );
}

export default Skills;
