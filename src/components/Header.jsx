import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import taaLogo from "../assets/images/taa__logo3.svg";
// import taaLogo from "../assets/images/taa__logo4.svg";
import useSound from "use-sound";
import Sound from "../assets/audio/song.mp3";

const Header = () => {
  const [play, { pause }] = useSound(Sound, { volume: 0.1 });

  const [audioActive, setAudioActive] = useState(false);

  const [navActive, setNavActive] = useState(false);

  const classAudioToggle = () => {
    setAudioActive(!audioActive);
  };

  const classNavToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      {/* navvar section */}
      <section className="header d-flex justify-content-center" id="header">
        <a href="/#top">
          <img src={taaLogo} alt="tadaLogo" className="navbar-brand" />
        </a>
      </section>
      <div className="btn-volume d-flex justify-content-end">
        <i
          className={`bi bi-volume-up up-btn ${audioActive ? "muted" : ""}`}
          onClick={() => {
            pause();
            classAudioToggle();
          }}
        ></i>
        <i
          className={`bi bi-volume-mute mute-btn ${audioActive ? "muted" : ""}`}
          onClick={() => {
            play();
            classAudioToggle();
          }}
        ></i>
      </div>
      <div
        className={`openbtn ${navActive ? "active" : ""}`}
        onClick={() => {
          classNavToggle();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav
        id="g-nav"
        className={navActive ? "panelactive" : ""}
        onClick={() => {
          classNavToggle();
        }}
      >
        <div id="g-nav-list">
          {/* ナビの数が増えた場合縦スクロールするためのdiv※不要なら削除 */}
          <ul>
            <li>
              <HashLink to="/#top">Top</HashLink>
            </li>
            <li>
              <HashLink to="/#works">Works</HashLink>
            </li>
            <li>
              <HashLink to="/#message">Message</HashLink>
            </li>
            <li>
              <HashLink to="/#review">Review</HashLink>
            </li>
            <li>
              <HashLink to="/#contact">Contact</HashLink>
            </li>
            <li>
              <Link to="/philosophy">Philosophy</Link>
            </li>
            <li>
              <HashLink to="/flow">Flow</HashLink>
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
