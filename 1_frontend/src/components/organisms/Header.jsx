import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// data
import customData from "../../data.json";

// components
import logo from "../../assets/header/logo.svg";
import openMenu from "../../assets/header/toggler.png";
import closeMenu from "../../assets/header/close.png";

// style
const StyledHeader = styled.header`
  height: 7vh;
  width: 100%;
  position: relative;
  transition-duration: 0.5s;


    .nav-links img {
      height: 4rem;
      border-radius: 50%;
      margin: 0;
    }
  }

  .navbar {
    display: flex;
    justify-content: center;
    align-items: space-between;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .nav-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1500px;
    height: 100%;
  }

  .main-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav-logo {
    color: #f5b921;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    flex-grow: 1;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .border-bottom {
    border-bottom: 0.5rem solid purple;
  }

  .nav-item {
    line-height: 40px;
    margin-right: 2rem;
    text-decoration: none;
  }

  .nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.4s ease, background-color 0.4s ease;
  }

  .nav-item:hover:after {
    width: 100%;
    background: #941a2f;
  }

  .nav-item .active {
    color: #941a2f;
    border: 1px solid #ffdd40;
  }

  .nav-icon {
    display: none;
    height: 30%;
  }

  .nav-icon img {
    height: 2.5rem;
  }

  .nav-container > .nav-links > img {
    height: 4rem;
  }

  /* 1080 */
  @media screen and (max-width: 1920px) {
    .nav-container > .nav-links > img {
      height: 3rem;
    }
  }

  // 720 screen
  @media screen and (max-width: 1366px) {
    .slide {
      h3 {
        font-family: "Parisienne", cursive;
        color: #c49b63;
        font-size: 2rem;
      }
      h1 {
        text-transform: uppercase;
        width: 30%;
        text-align: center;
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
        width: 40%;
        text-align: center;
      }
    }
    #top > .navbar > .nav-container > .nav-links > img {
      height: 2.5rem;
    }

    .nav-item {
      font-size: 1rem;
    }
  }

  // tablet
  @media screen and (max-width: 812px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: absolute;
      top: 101%;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
      background-color: rgb(0, 0, 0);
      z-index: 6;
      padding-bottom: 2rem;
    }

    .nav-menu.active {
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: #ffdd40;
      border: none;
    }
    .nav-links {
      width: 100%;
      display: flex;
    }

    .nav-item {
      font-size: 1.2rem;
      margin: 0;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .nav-icon img {
      height: 2.4rem;
    }

    .slide {
      padding: 15% 0;
      h3 {
        font-size: 2rem;
      }
      h1 {
        width: 60%;

        font-size: 2rem;
      }
      p {
        font-size: 1rem;
        width: 70%;
      }
    }
    #top > .navbar > .nav-container > .nav-links > img {
      height: 3.4rem;
    }
  }

  // mobile
  @media screen and (max-width: 415px) {
    .nav-icon {
      height: 30%;
    }
    .slide {
      padding: 20% 0 15% 0;
      h3 {
        font-size: 2rem;
      }
      h1 {
        width: 70%;

        font-size: 1.7rem;
      }
      p {
        font-size: 1rem;
        width: 80%;
      }
    }
    #top > .navbar > .nav-container > .nav-links > img {
      height: 2.5rem;
    }
  }

  .nav-icon img {
    height: 1.8rem;
  }

  .logo {
    height: 2rem;
    padding-left:1rem;
    filter: invert(15%) sepia(74%) saturate(3477%) hue-rotate(355deg)
      brightness(92%) contrast(99%);
  }

  // small mobile
  @media screen and (max-width: 378px) {
    .nav-menu {
      top: 102%;
    }
    .nav-icon {
      height: 8%;
    }

    .nav-links {
      padding: 0.9rem;
    }
    #top > .navbar > .nav-container > .nav-links > img {
      height: 2rem;
    }
  }
`;

const Header = ({ openMenuModal, openBookingModal }) => {
  // hooks

  // state
  const [click, setClick] = useState(false);
  // ref

  // custom functions
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <StyledHeader id="home">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />

      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <a
            href="/#"
            className="nav-links d-flex align-items-center"
            onClick={click ? handleClick : null}
          >
            <img className="logo" src={logo} alt="" />
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link
              to="/"
              className="nav-item"
              onClick={click ? handleClick : null}
            >
              {customData.header.home}
            </Link>
            <Link
              to="/blog"
              className="nav-item"
              onClick={click ? handleClick : null}
            >
              {customData.header.blog}
            </Link>
            <Link
              to="/gallery"
              className="nav-item"
              onClick={click ? handleClick : null}
            >
              {customData.header.gallery}
            </Link>

            <Link
              to="/contact"
              className="nav-item"
              onClick={click ? handleClick : null}
            >
              {customData.header.contact}
            </Link>
            <Link
              to="/login"
              className="nav-item"
              onClick={click ? handleClick : null}
            >
              {customData.header.login}
            </Link>
          </ul>
          <div className="nav-icon " onClick={handleClick}>
            {click ? (
              <img src={openMenu} alt="close mobile menu" />
            ) : (
              <img src={closeMenu} alt="menu hamburger" />
            )}
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
