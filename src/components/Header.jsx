import React, { useState } from "react";
import { Link } from "react-router-dom";
import taaLogo from "../assets/images/taa__logo4.svg";
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
              <a href="/#top">Top</a>
            </li>
            <li>
              <a href="/#works">Works</a>
            </li>
            <li>
              <a href="/#message">Message</a>
            </li>
            <li>
              <a href="/#review">Review</a>
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
