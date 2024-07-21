import './Skills.css'
import Html from '../../assets/img/html.svg'
import Css from '../../assets/img/css.svg'
import JavaScript from '../../assets/img/javascript.svg'
import NodeJs from '../../assets/img/nodeJs.svg'
import ExpressJs from '../../assets/img/expressJs.png'
import MongoDb from '../../assets/img/mongoDb.svg'
import ReactJs from '../../assets/img/react.svg'
import BootStrap from '../../assets/img/bootstrap.svg'
import Java from '../../assets/img/java.svg'
import SQL from '../../assets/img/sql.svg'



export default function Skills() {
  return (
    <section id="skills" className="skillsContainer">
        <h2 className='sectionTitle'>Skills</h2>
        <div className="skills">
            <div className='skillName'>
                <img src={Html} alt="" />
                <p>HTML</p>
            </div>
            <div className='skillName'>
                <img src={Css} alt="" />
                <p>CSS</p>
            </div>
            <div className='skillName'>
                <img src={JavaScript} alt="" />
                <p>JavaScript</p>
            </div>
            <div className='skillName'>
                <img src={NodeJs} alt="" />
                <p>NodeJS</p>
            </div>
            <div className='skillName'>
                <img src={MongoDb} alt="" />
                <p>MongoDB</p>
            </div>
            <div className='skillName'>
                <img src={ExpressJs} alt="" />
                <p>ExpressJS</p>
            </div>
            <div className='skillName'>
                <img src={ReactJs} alt="" />
                <p>ReactJS</p>
            </div>
            <div className='skillName'>
                <img src={Java} alt="" />
                <p>JAVA</p>
            </div>
            <div className='skillName'>
                <img src={SQL} alt="" />
                <p>SQL</p>
            </div>
            <div className='skillName'>
                <img src={BootStrap} alt="" />
                <p>Bootstrap</p>
            </div>
        </div>
    </section>
  )
}
