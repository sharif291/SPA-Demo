import React, { useState } from "react";
import "../assets/css/Navbar.css";
import logo from "../assets/images/background/logo.png";
import menu from "../assets/images/icons/menu.webp";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [showNav, setshowNav] = useState(false);
  function tooglenav() {
    setshowNav(!showNav);
  }

  return (
    <div className="nav-header">
      <div className="nav-bar">
        <div className="row">
          <div className="col-2 menu-icon">
            <span
              onClick={() => {
                tooglenav();
              }}
            >
              <img src={menu} alt="menu bar"></img>
            </span>
          </div>
          <div className="col-2 logo">
            <div className="">
              <Link to="/" className="nav-link">
                <img src={logo} alt="logo"></img>
              </Link>
            </div>
          </div>

          <div className="col-10">
            <div className="row">
              <ul className="menu">
                <li className="menu-item">
                  <HashLink smooth to="/#" className="nav-link">
                    Home
                  </HashLink>
                </li>
                <li className="menu-item">
                  <HashLink smooth to="/#about" className="nav-link">
                    About Us
                  </HashLink>
                </li>
                <li className="menu-item">
                  <HashLink smooth to="/" className="nav-link">
                    Services +
                  </HashLink>
                  <ul>
                    <li>
                      <HashLink smooth to="/#services" className="nav-link">
                        SEO
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#services" className="nav-link">
                        SMS
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#services" className="nav-link">
                        RT&D
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#services" className="nav-link">
                        OMM
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#services" className="nav-link">
                        Penalty Recovery{" "}
                      </HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/all_service#services" className="nav-link">
                        All Services
                      </HashLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <HashLink smooth to="/#projects" className="nav-link">
                    Projects +
                  </HashLink>
                </li>
                <li className="menu-item">
                  <HashLink smooth to="/#" className="nav-link">
                    Blogs +
                  </HashLink>
                </li>
                <li className="menu-item">
                  <HashLink smooth to="/#" className="nav-link">
                    Pages
                  </HashLink>
                </li>
                <li className="menu-item">
                  <HashLink smooth to="/#" className="nav-link">
                    Contacts
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {showNav ? (
          <div className="">
            <ul className="mobile-menu">
              <li className="mobile-menu-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    tooglenav();
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    tooglenav();
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    tooglenav();
                  }}
                >
                  Services +
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    tooglenav();
                  }}
                >
                  Projects +
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    tooglenav();
                  }}
                >
                  Blogs +
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    tooglenav();
                  }}
                >
                  Pages
                </Link>
              </li>
              <li className="mobile-menu-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    tooglenav();
                  }}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
