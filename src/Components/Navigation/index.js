import './index.css'
import React from "react";
import { Link } from 'react-router-dom';

const Navigation = ({ selected = "HOME" }) => {
  return (
    <div>
      <ul id="nav">
        <li>
          <Link to="/">
            <div className="nav-item-container home">
              <span className={`nav-item home ${selected === 'HOME' ? 'selected' : ''}`}>
                <span className="heading-name home"> Paul Plew </span>
                <br />
                <span>Developer &#38; Designer</span>
              </span>
            </div>
          </Link>
        </li>
        <li className="nav-separator"> &#8212;&#8212; </li>
        <li>
          <Link to="/about">
            <div className="nav-item-container about">
              <span className={`nav-item about ${selected === 'ABOUT' ? 'selected' : ''}`}>
                About Me
              </span>
            </div>
          </Link>
        </li>
        <li className="nav-separator"> &#8212;&#8212; </li>
        <li>
          <Link to="/portfolio">
            <div className="nav-item-container portfolio">
              <span className={`nav-item portfolio ${selected === 'PORTFOLIO' ? 'selected' : ''}`}>
                Portfolio
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;