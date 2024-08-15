import homeImg from "../../assets/img/avatarImg.jpg"
import sun from "../../assets/img/sun.svg"
import moon from "../../assets/img/moon.svg"
import instaIconLight from "../../assets/img/insta-light.svg"
import instaIconDark from "../../assets/img/insta-dark.svg"
import linkedinIconLight from "../../assets/img/linkedin-light.svg"
import linkedinIconDark from "../../assets/img/linkedin-dark.svg"
import githubIconLight from "../../assets/img/github-light.svg"
import githubIconDark from "../../assets/img/github-dark.svg"
import resume from "../../assets/documents/AmarjeetSinghResume.pdf"
import { useTheme } from "../../common/ThemeContext.jsx"
import './Introduction.css'

function Introduction() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon
    const instaIcon = theme === 'light' ? instaIconLight : instaIconDark
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark

  return (
    <section id="home" className="container">
        <div className="colorModeContainer">
            <img className="myImg" src={homeImg} alt="My image"/>
            <img src={themeIcon} alt="Color mode icon" className="colorMode" onClick={toggleTheme}/>
        </div>
        <div className="info">
            <h1>Amarjeet Singh</h1>
            <h3>Software Developer</h3>
            <p className="description">Innovative Full Stack Developer crafting modern, responsive web applications and turning ideas into interactive realities with end-to-end development.</p>
            <span>
                <a href="https://www.linkedin.com/in/amarjeet-singh-414a43284/" target="_blank">
                    <img src={linkedinIcon} alt="linkedin icon" />
                </a>
                <a href="https://github.com/amarjeetsingh7503" target="_blank">
                    <img src={githubIcon} alt="github icon" />
                </a>
                <a href="https://www.instagram.com/amarjeet_singh7503?igsh=MXh6MmJzNTZvaTFtNQ%3D%3D&utm_source=qr" target="_blank">
                    <img src={instaIcon} alt="Insta icon" />
                </a>
            </span>
            
            <a href={resume} download>
                <button>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Introduction