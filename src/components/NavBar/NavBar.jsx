import React from 'react';
import { Link } from 'react-scroll';
import { useTheme } from "../../common/ThemeContext.jsx"
import sun from "../../assets/img/sun.svg"
import moon from "../../assets/img/moon.svg"
import LogoLight from "../../assets/img/logo-light.svg"
import LogoDark from "../../assets/img/logo-dark.svg"
import resume from "../../assets/documents/AmarjeetSinghResume.pdf"

import './NavBar.css'

function NavBar() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const logoIcon = theme === 'light' ? LogoLight : LogoDark
  return (
    <header className="navbar">
        <a href="#" className="brand-name">
          <img src={logoIcon} alt="" />
          <p>AMARJEET SINGH</p>
        </a>
        <div className="nav-links">
            <Link to="home" smooth={true} duration={500}>Home</Link>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
            <a href={resume} download>Resume</a>
        </div>
    </header>
  )
}

export default NavBar