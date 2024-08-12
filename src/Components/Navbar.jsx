import React, { useEffect, useState,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faTimes,} from "@fortawesome/free-solid-svg-icons";
import LogoBrandmark from "../Assects/Imags/logo Brandmark.svg"
import MenuImg from "../Assects/Imags/circle-menu features.svg";
import LogoImg1 from "../Assects/Imags/cross-circle Features.svg";
import LogoImg2 from "../Assects/Imags/circle-dollar Features.svg";
import LogoImg3 from "../Assects/Imags/message-square Features.svg";
import LogoImg4 from "../Assects/Imags/login-2-svgrepo-com Navbar.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if(!isOpen){
        setIsMenuOpen(false);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);
  return (
    <nav className={`nav-container ${isOpen ? "transperent" : ""}`} ref={navbarRef}>
     <div className="bars-container">
        
      <FontAwesomeIcon
        icon={isOpen ? faTimes : faBars}
        onClick={toggleNavbar}
        className={isOpen ? "times-icon" : "bars-icon"}
        style={{ cursor: "pointer", fontSize: "2.5em" }}
      />
      </div>
      {isOpen && (
        <div className="dropdown">
        <img src={LogoBrandmark} alt="logo" className="LogoBrand"/>
        <div className="Menu" onClick={toggleMenu}>
          <p className="menu-button" >Menu</p>
          <img src={MenuImg} alt="" className="NavbarLogo"/>
        </div>
          {isMenuOpen && (
            <div className="dropdown-menu">
              <div className="dropdownLogos"><p>Tools</p> <img src={LogoImg1} alt="logo"  className="NavbarLogo"/></div>
              <div className="dropdownLogos"><p>Pricing</p> <img src={LogoImg2} alt="logo"  className="NavbarLogo"/></div>
              <div className="dropdownLogos"><p>Support</p><img src={LogoImg3} alt="logo" className="NavbarLogo" /></div>
              <div className="dropdownLogos"><p>Login</p> <img src={LogoImg4} alt="logo" className="NavbarLogo" /> </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
