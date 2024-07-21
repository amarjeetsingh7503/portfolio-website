import instaIconLight from "../../assets/img/insta-light.svg"
import instaIconDark from "../../assets/img/insta-dark.svg"
import linkedinIconLight from "../../assets/img/linkedin-light.svg"
import linkedinIconDark from "../../assets/img/linkedin-dark.svg"
import githubIconLight from "../../assets/img/github-light.svg"
import githubIconDark from "../../assets/img/github-dark.svg"
import { useTheme } from "../../common/ThemeContext.jsx"
import './Footer.css';

function Footer() {
    const {theme} = useTheme();

    const instaIcon = theme === 'light' ? instaIconLight : instaIconDark
    const githubIcon = theme === 'light' ? githubIconLight : githubIconDark
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark

  return (
    <footer className="footer">
        <p>&copy; 2024 Amarjeet Singh</p>
        <div className="footer-links">
            <a href="https://www.linkedin.com/in/amarjeet-singh-414a43284/" target="_blank"><img src={linkedinIcon} alt="" /></a>
            <a href="https://github.com/amarjeetsingh7503" target="_blank"><img src={githubIcon} alt="" /></a>
            <a href="https://www.instagram.com/amarjeet_singh7503?igsh=MXh6MmJzNTZvaTFtNQ%3D%3D&utm_source=qr" target="_blank"><img src={instaIcon} alt="" /></a>
        </div>
    </footer>
  );
}

export default Footer;
