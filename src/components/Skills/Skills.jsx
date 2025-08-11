import "./Skills.css";
import Html from "../../assets/img/html.svg";
import Css from "../../assets/img/css.svg";
import JavaScript from "../../assets/img/javascript.svg";
import NodeJs from "../../assets/img/nodeJs.svg";
import ExpressJs from "../../assets/img/expressJs.png";
import MongoDb from "../../assets/img/mongoDb.svg";
import ReactJs from "../../assets/img/react.svg";
import BootStrap from "../../assets/img/bootstrap.svg";
import SQL from "../../assets/img/sql.svg";
import MaterialUI from "../../assets/img/material-ui-logo.png";
import TailwindCSS from "../../assets/img/tailwind-css.png";
import Git from "../../assets/img/git.png";
import GitHub from "../../assets/img/github-logo.png";

export default function Skills() {
  return (
    <section id="skills" className="skillsContainer">
      <h2 className="sectionTitle">Skills</h2>
      <div className="skills">
        <div className="skillName">
          <img src={Html} alt="" />
          <p>HTML</p>
        </div>
        <div className="skillName">
          <img src={Css} alt="" />
          <p>CSS</p>
        </div>
        <div className="skillName">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="skillName">
          <img src={NodeJs} alt="" />
          <p>NodeJS</p>
        </div>
        <div className="skillName">
          <img src={MongoDb} alt="" />
          <p>MongoDB</p>
        </div>
        <div className="skillName">
          <img src={ExpressJs} alt="" />
          <p>ExpressJS</p>
        </div>
        <div className="skillName">
          <img src={ReactJs} alt="" />
          <p>ReactJS</p>
        </div>
        <div className="skillName">
          <img src={MaterialUI} alt="" />
          <p>Material UI</p>
        </div>
        <div className="skillName">
          <img src={SQL} alt="" />
          <p>SQL</p>
        </div>
        <div className="skillName">
          <img src={BootStrap} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="skillName">
          <img src={TailwindCSS} alt="" />
          <p>Tailwind CSS</p>
        </div>
        <div className="skillName">
          <img src={Git} alt="" />
          <p>Git</p>
        </div>
        <div className="skillName">
          <img src={GitHub} alt="" />
          <p>GitHub</p>
        </div>
      </div>
    </section>
  );
}
