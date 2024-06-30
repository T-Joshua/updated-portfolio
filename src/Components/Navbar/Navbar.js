import React, { useState } from "react";

import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-scroll";

import "./NavbarStyles.css";

import logo from "../../Assets/mylogo2.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  return (
    <div id="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <nav>
        <div className={nav ? "logo dark" : "logo"}>
          <img
            style={{
              width: "150px",
              marginTop: "9px",
              height: "15vh",
              textAlign: "center",
              alignItems: "center",
              objectFit: "fill",
            }}
            src={logo}
            alt="myLogo"
          />
        </div>
        <ul className="nav-menu">
          <Link to="home" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <li>About Me</li>
          </Link>
          <Link to="service" smooth={true} duration={500}>
            <li>Services</li>
          </Link>
          <Link to="skill" smooth={true} duration={500}>
            <li>Technologies</li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li>Contact Me</li>
          </Link>
        </ul>
        <button className="btn">
          <a href="/projects"> Projects</a>
        </button>

        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <HiOutlineMenu className="icon" />
          ) : (
            <AiOutlineClose style={{ color: "#fff" }} className="icon" />
          )}
        </div>
        <div className={nav ? "mobile-menu active" : "mobile-menu"}>
          <ul className="mobile-nav">
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
              <li>Home</li>
            </Link>
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
              <li>About Me </li>
            </Link>
            <Link to="service" smooth={true} duration={500} onClick={closeMenu}>
              <li>Services</li>
            </Link>
            <Link to="skill" smooth={true} duration={500} onClick={closeMenu}>
              <li>Technologies</li>
            </Link>
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
              <li>Contact Me</li>
            </Link>
          </ul>
          <button className="btnn">
            <a href="/projects">Projects</a>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
