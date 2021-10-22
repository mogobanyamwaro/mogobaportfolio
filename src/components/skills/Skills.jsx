import React from 'react';
import './Skills.scss';
import { Link } from 'react-router-dom';
function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Profesional Skills</h2>
          <p className="skills__text">
            I have arranged my skills on the number of problems i have solved
            with the language
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
              <span className="skills__name">Sass & Bootstrap</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            <div>
              <span className="skills__percentage">70%</span>
            </div>
          </div>
        </div>

        <div>
          <p className="skills__text">DevOps</p>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-html5 skills__icon"></i>
              <span className="skills__name">Git & Github</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div>
              <span className="skills__percentage">99%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-css3 skills__icon"></i>
              <span className="skills__name">Docker</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div>
              <span className="skills__percentage">85%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-javascript skills__icon"></i>
              <span className="skills__name">Linux</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div>
              <span className="skills__percentage">95%</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxs-paint skills__icon"></i>
              <span className="skills__name">Amazon Web Services</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            <div>
              <span className="skills__percentage">70%</span>
            </div>
          </div>
          <div className="skills_data">
            <Link className="skills__cv" to="#">
              Read My CV
            </Link>
          </div>
        </div>
      </div>
      <a className="link" href="#works">
        <img src="assets/down.png" alt="" />
      </a>
    </section>
  );
}

export default Skills;
