import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from "../../common/ThemeContext.jsx"; // Fixed import
import LogoLight from "../../assets/img/logo-light.svg";
import LogoDark from "../../assets/img/logo-dark.svg";
import resume from "../../assets/documents/AmarjeetSinghResume.pdf";
import './NavBar.css';

function NavBar() {
    const { theme } = useTheme();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navToggler = () => {
        setIsNavOpen(!isNavOpen);
    };

    const logoIcon = theme === 'light' ? LogoLight : LogoDark;

    return (
        <header className="navbar">
            <a href="#" className="brand-name">
                <img src={logoIcon} alt="Logo" />
                <p>AMARJEET SINGH</p>
            </a>
            <div className="nav-links">
                <Link to="home" smooth={true} duration={500}>Home</Link>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <a href={resume} download>Resume</a>
            </div>
            <div className="nav-dropdown">
              <button className="navbar-toggler" onClick={navToggler}>
                  &#9776;
              </button>
              <div className="dropdown-menu" style={{ display: isNavOpen ? 'inline' : 'none' }}>
                  <Link to="home" smooth={true} duration={500} className='dropdown-links'>Home</Link>
                  <Link to="skills" smooth={true} duration={500} className='dropdown-links'>Skills</Link>
                  <Link to="projects" smooth={true} duration={500} className='dropdown-links'>Projects</Link>
                  <a href={resume} download className='dropdown-links'>Resume</a>
              </div>
            </div>
        </header>
    );
}

export default NavBar;
