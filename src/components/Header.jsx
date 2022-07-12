import React from "react";
import { Link } from "react-router-dom";
import tadaLogo from "../assets/images/dhu_logo.svg";

const Header = () => {
  return (
    <>
      {/* navvar section */}
      <section
        className="header d-flex justify-content-center py-5"
        id="header"
      >
        <Link to="/">
          <img src={tadaLogo} alt="tadaLogo" className="navbar-brand" />
        </Link>
      </section>
      <div className="btn-volume d-flex justify-content-end">
        <i className="bi bi-volume-up up-btn"></i>
        <i className="bi bi-volume-mute mute-btn"></i>
      </div>
      <div className="openbtn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav id="g-nav">
        <div id="g-nav-list">
          {/* ナビの数が増えた場合縦スクロールするためのdiv※不要なら削除 */}
          <ul>
            <li>
              <a href="#top">Top</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#message">Message</a>
            </li>
            <li>
              <a href="#review">Review</a>
            </li>
            <li>
              <Link to="/philosophy">Philosophy</Link>
            </li>
            <li>
              <Link to="/flow">Flow</Link>
            </li>
            <li>
              <Link to="/overview">Overview</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
